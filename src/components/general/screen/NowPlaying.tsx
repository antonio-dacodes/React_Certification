/* eslint-disable  */
import { useEffect, useState } from "react";
import { getMoviesNowPlaying } from "../../../api/getMoviesNowPlaying";
import { MovieCard } from "../cards/MovieCard";
import { Box, Grid } from "@mui/material";
import { getMovieById } from "../../../api/getMovieById";
import { Paginations } from "../screen/Paginations";
import CircularProgress from "@mui/material/CircularProgress";
import Peli from "../../../assets/images/Peli.png";

export const NowPlaying = () => {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState<any>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const result = async () => {
      const movies: any = await getMoviesNowPlaying(page);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setTotalPages(movies.data.total_pages);
      const resp: any = movies.data.results.map((movie: any) => {
        let genre: string[] = [];
        (async () => {
          const movieData: any = await getMovieById(movie.id);
          genre.push(...movieData.data.genres.map((gen: any) => gen.name));
        })();

        return {
          ...movie,
          genre,
          poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        };
      });

      setMoviesNowPlaying(resp);
    };

    result();

    window.scroll(0, 0);
  }, [page]);

  return (
    <Grid>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            width: "90%",
            margin: "auto",
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {moviesNowPlaying.map((mov: any, id: number) => (
            <MovieCard
              key={id}
              movie={{
                image: {
                  alt: "image-pelicula",
                  src:
                    mov.poster_path ===
                    "https://image.tmdb.org/t/p/originalnull"
                      ? Peli
                      : mov.poster_path,
                },
                title: mov.title,
                overview: mov.overview,
                vote: (mov.vote_average * 5) / 10,
                anio: new Date(mov.release_date).getFullYear(),
                genres: mov.genre,
              }}
            />
          ))}
        </Box>
      )}
      <Paginations
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        setTotalPages={setTotalPages}
      />
    </Grid>
  );
};
