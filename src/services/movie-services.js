export const getMovieYear = (date) => date.slice(0, date.indexOf('-'));
export const getGenres = (genres) => genres.join(', ');