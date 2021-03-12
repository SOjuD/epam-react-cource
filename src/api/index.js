class MovieApi {
    baseUrl = 'http://localhost:4000';
    defaultMovieListLength = 12;

    getMovies = (offset, limit) => {
        const getParams = `?offset=${offset || 0}&limit=${limit || this.defaultMovieListLength}`;
        return fetch(`${this.baseUrl}/movies${getParams}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }

    getMovie = (id) => fetch(`${this.baseUrl}/movies/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

    deleteMovie = (id) => fetch(`${this.baseUrl}/movies/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.status)

    AddMovie = () => fetch(`${this.baseUrl}/movies`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

    UpdateMovie = () => fetch(`${this.baseUrl}/movies`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

}

export const api = new MovieApi();