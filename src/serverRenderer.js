import React from 'react';
import { renderToString } from 'react-dom/server';
import {StaticRouter, matchPath} from 'react-router-dom';
import {Root} from './components/app/app';
import configureStore from "./store/reducer";
import {api} from "@/api";
import {initialState} from '@/store/initial-state';
import routes from '@/routes';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    let urlParams = null;
    routes.forEach(route => {
      if(!urlParams) urlParams = matchPath(req.url, route)
    })

    function getMovies () {
      const params = {};
      const promises = [];
      if(urlParams?.params?.search) params.search = urlParams.params.search;

      if(urlParams?.params?.id){
        promises.push(api.getMovie(urlParams.params.id).then(res => {
          initialState.currentMovie = res;
        }));
      }

      promises.push(
        api.getMovies(params).then(res => {
          initialState.movieData = {...initialState.movieData, ...res}
        }).catch(() => {
          initialState.movieData.data = []
        }));

      return promises;

    }


    Promise.all(getMovies()).finally(() => {
      const store = configureStore(initialState);
      const preloadedState = store.getState();

      const root = (
          <Root
              location={req.url}
              Router={StaticRouter}
              store={store}
          />
      );

      const htmlString = renderToString(root);

      res.send(renderHTML(htmlString, preloadedState));
    })
  };
}
