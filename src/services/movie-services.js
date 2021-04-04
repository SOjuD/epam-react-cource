export const getMovieYear = (date) => new Date(date).getFullYear();
export const getGenres = (genres) => genres.join(', ');