import axios from "axios";

export const getSession = async () => {
  const Session = import.meta.env.VITE_SESSION;

  const key = import.meta.env.VITE_API_KEY;

  try {
    const movies = await axios.get(`${Session}?api_key=${key}`);
    return movies;
  } catch (e) {
    return e;
  }
};
