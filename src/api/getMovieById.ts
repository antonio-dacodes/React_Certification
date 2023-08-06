import axios from "axios";

export const getMovieById = async (movie_id: string) => {
  const Url = import.meta.env.VITE_BASE_URL;

  const key = import.meta.env.VITE_API_KEY;

  try {
    const movies = await axios.get(`${Url}/${movie_id}?api_key=${key}`);
    return movies;
  } catch (e) {
    return e;
  }
};
