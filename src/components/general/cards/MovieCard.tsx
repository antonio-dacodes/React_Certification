/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Paper, Typography, Box } from "@mui/material";
import Star from "../../../assets/images/Star.png";
import EmptyStar from "../../../assets/images/EmpyStar.png";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import { Movie } from "../../../types/Movie";

interface Movies {
  movie: Movie;
}

export const MovieCard: React.FC<Movies> = ({ movie }) => {
  const [opacityColor, setOpacityColor] = useState("1");
  const [effect, setEffect] = useState("100%");

  return (
    <Paper
      elevation={1}
      sx={{
        position: "relative",
        width: "253px",
        height: "367px",
        backgroundColor: "#5141eacc",
        display: "flex",
        flexDirection: "column",
        borderRadius: "50px",
        margin: "50px 0",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "inherit",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 40px",
          transition: "1.8s linear",
          top: effect,
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "poppins, sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          {movie.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "poppins, sans-serif",
              fontSize: "9px",
              fontWeight: 600,
              lineHeight: "127.5%",
            }}
          >
            {movie.anio}
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "poppins, sans-serif",
              fontSize: "9px",
              fontWeight: 600,
              lineHeight: "127.5%",
              textAlign: "center",
            }}
          >
            {movie.genres}
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "poppins, sans-serif",
            fontSize: "10px",
            fontWeight: 400,
            lineHeight: "127.5%",
            textAlign: "justify",
            marginBottom: "20px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {movie.overview}
        </Typography>
        <Rating
          name="ratingMovie"
          value={movie.vote}
          max={5}
          precision={0.5}
          readOnly
          icon={<Box component={"img"} alt="starts" src={Star} />}
          emptyIcon={<Box component={"img"} alt="starts" src={EmptyStar} />}
        />
      </Box>
      <Box
        onMouseEnter={() => {
          setOpacityColor(".3");
          setEffect("0%");
        }}
        onMouseLeave={() => {
          setOpacityColor("1");
          setEffect("100%");
        }}
        sx={{
          position: "absolute",
          width: "253px",
          height: "367px",
          opacity: opacityColor,
          borderRadius: "50px",
          boxShadow: "8px 4px 8px 4px",
        }}
        component={"img"}
        alt={movie.image?.alt}
        src={movie.image?.src}
      ></Box>
    </Paper>
  );
};
