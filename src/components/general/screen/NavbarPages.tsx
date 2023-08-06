/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Box } from "@mui/material";
import { ButtonLink } from "../buttons/ButtonLink";
import React, { useState } from "react";

interface MovieProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

export const NavbarPage: React.FC<MovieProps> = ({ setType, type }) => {
  const [back, setBack] = useState("linear-gradient(100deg,#3AE3C3, #4E6CE4)");
  const [back1, setBack1] = useState(
    "linear-gradient(100deg,#3AE3C3, #4E6CE4)"
  );
  const [back2, setBack2] = useState(
    "linear-gradient(100deg,#3AE3C3, #4E6CE4)"
  );
  const [back3, setBack3] = useState(
    "linear-gradient(100deg,#3AE3C3, #4E6CE4)"
  );

  return (
    <Box
      sx={{
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <ButtonLink
        onClick={() => {
          setType("NOW PLAYING");
        }}
        onMouseEnter={() => {
          setBack("#8b4c3d");
        }}
        onMouseLeave={() => {
          setBack("linear-gradient(100deg,#3AE3C3, #4E6CE4)");
        }}
        text={"Now playing"}
        disableElevation={false}
        variant={"contained"}
        style={{
          width: "244px",
          height: "64px",
          background: type === "NOW PLAYING" ? "#8b4c3d" : back,
          color: "#FFF",
          fontFamily: "Poppins",
          fontSize: "30px",
          fontWeight: 500,
          fontStyle: "normal",
          textTransform: "none",
          borderRadius: "100px",
        }}
      />
      <ButtonLink
        onClick={() => {
          setType("POPULAR");
        }}
        onMouseEnter={() => {
          setBack1("#8b4c3d");
        }}
        onMouseLeave={() => {
          setBack1("linear-gradient(100deg,#3AE3C3, #4E6CE4)");
        }}
        text={"Popular"}
        disableElevation={false}
        variant={"contained"}
        style={{
          width: "244px",
          height: "64px",
          background: type === "POPULAR" ? "#8b4c3d" : back1,
          color: "#FFF",
          fontFamily: "Poppins",
          fontSize: "30px",
          fontWeight: 500,
          fontStyle: "normal",
          textTransform: "none",
          borderRadius: "100px",
        }}
      />
      <ButtonLink
        onClick={() => {
          setType("TOP RATED");
        }}
        onMouseEnter={() => {
          setBack2("#8b4c3d");
        }}
        onMouseLeave={() => {
          setBack2("linear-gradient(100deg,#3AE3C3, #4E6CE4)");
        }}
        text={"Top reated"}
        disableElevation={false}
        variant={"contained"}
        style={{
          width: "244px",
          height: "64px",
          background: type === "TOP RATED" ? "#8b4c3d" : back2,
          color: "#FFF",
          fontFamily: "Poppins",
          fontSize: "30px",
          fontWeight: 500,
          fontStyle: "normal",
          textTransform: "none",
          borderRadius: "100px",
        }}
      />
      <ButtonLink
        onClick={() => {
          setType("UPCOMMING");
        }}
        onMouseEnter={() => {
          setBack3("#8b4c3d");
        }}
        onMouseLeave={() => {
          setBack3("linear-gradient(100deg,#3AE3C3, #4E6CE4)");
        }}
        text={"Upcoming"}
        disableElevation={false}
        variant={"contained"}
        style={{
          width: "244px",
          height: "64px",
          background: type === "UPCOMMING" ? "#8b4c3d" : back3,
          color: "#FFF",
          fontFamily: "Poppins",
          fontSize: "30px",
          fontWeight: 500,
          fontStyle: "normal",
          textTransform: "none",
          borderRadius: "100px",
        }}
      />
    </Box>
  );
};
