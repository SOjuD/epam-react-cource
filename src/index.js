import React from 'react';
import ReactDOM from 'react-dom';

import {App} from '@/components/app/app';
import {Provider} from "react-redux";
import {store} from "@/store/reducer";
import ErrorBoundary from "@/components/error-boundary/error-boundary";


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);