const API_KEY = '376f764463b3be334018f32e0a6f923c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query, exact = false) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (exact) {
      return data.results.filter(
        movie => movie.title.toLowerCase() === query.toLowerCase()
      );
    }

    return data.results;
  } catch (error) {
    console.error('Error al buscar películas:', error);
    return [];
  }
};