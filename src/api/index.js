class MovieApi {
    baseUrl = 'http://localhost:4000';
    defaultMovieListLength = 12;

    handleErrors = response => response.ok ? response :
        response.text().then((textResponse) => {
            throw {status: response.status, body: textResponse, statusText: response.statusText};
        });

    getMovies = ({offset, limit = this.defaultMovieListLength, sort, filter, search}) => {
        let getParams = `?offset=${offset || 0}&limit=${limit || this.defaultMovieListLength}`;
        if(sort){
            if(sort.title !== 'default') getParams += `&sortBy=${sort.sortBy}&sortOrder=${sort.sortOrder}`
        }
        if(filter){
            if(filter.length) getParams += `&filter=${filter.toString()}`
        }
        if(search){
            getParams +=`&search=${search}&searchBy=title`
        }
        return fetch(`${this.baseUrl}/movies${getParams}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(this.handleErrors).then(res => res.json())
    }

    getMovie = (id) => fetch(`${this.baseUrl}/movies/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(this.handleErrors).then(res => res.json())

    deleteMovie = (id) => fetch(`${this.baseUrl}/movies/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(this.handleErrors).then(res => res.status)

    addMovie = (data) => fetch(`${this.baseUrl}/movies`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(this.handleErrors).then(res => res.json())

    updateMovie = (data) => fetch(`${this.baseUrl}/movies`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(this.handleErrors).then(res => res.json())

}

export const api = new MovieApi();