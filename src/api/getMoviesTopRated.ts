import axios from "axios";

export const getMoviesTopRated = async (page: number) => {
  const Url = import.meta.env.VITE_BASE_URL;

  const key = import.meta.env.VITE_API_KEY;

  try {
    const movies = await axios.get(
      `${Url}/top_rated?api_key=${key}&page=${page}`
    );
    return movies;
  } catch (e) {
    return e;
  }
};
