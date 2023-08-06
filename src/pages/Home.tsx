/* eslint-disable */
import { Container } from "@mui/material";
import { DescriptionMovie } from "../components/general/utils/Description";
import { NavbarPage } from "../components/general/screen/NavbarPages";
import { TitleLink } from "../components/general/screen/TitleLink";
import { NowPlaying } from "../components/general/screen/NowPlaying";
import { Popular } from "../components/general/screen/Popular";
import { TopRated } from "../components/general/screen/TopRated";
import { Upcomming } from "../components/general/screen/Upcomming";
import { useState } from "react";

export const Home = () => {
  const [type, setType] = useState<string>("NOW PLAYING");

  return (
    <>
      <Container maxWidth={false}>
        <NavbarPage setType={setType} type={type} />
        <TitleLink
          title={
            type === "NOW PLAYING"
              ? DescriptionMovie.NowPlaying.title
              : type === "POPULAR"
              ? DescriptionMovie.Popular.title
              : type === "TOP RATED"
              ? DescriptionMovie.TopRated.title
              : type === "UPCOMMING"
              ? DescriptionMovie.Upcomming.title
              : undefined
          }
          description={
            type === "NOW PLAYING"
              ? DescriptionMovie.NowPlaying.description
              : type === "POPULAR"
              ? DescriptionMovie.Popular.description
              : type === "TOP RATED"
              ? DescriptionMovie.TopRated.description
              : type === "UPCOMMING"
              ? DescriptionMovie.Upcomming.description
              : undefined
          }
        />
        {type === "NOW PLAYING" ? (
          <NowPlaying />
        ) : type === "POPULAR" ? (
          <Popular />
        ) : type === "TOP RATED" ? (
          <TopRated />
        ) : type === "UPCOMMING" ? (
          <Upcomming />
        ) : undefined}
      </Container>
    </>
  );
};
