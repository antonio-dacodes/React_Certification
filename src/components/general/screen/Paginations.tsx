/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Anterior from "../../../assets/images/Anterior.png";
import Siguiente from "../../../assets/images/Siguiente.png";

interface PagesProps {
  totalPages: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}

export const Paginations: React.FC<PagesProps> = ({
  totalPages,
  page,
  setPage,
  setTotalPages,
}) => {
  const [left, setLeft] = useState<boolean>(false);
  const [right, setRight] = useState<boolean>(false);

  const handlePageAnterior = (__event: React.ChangeEvent<unknown>) => {
    setPage(page - 1);
  };

  const handlePageSiguiente = (__event: React.ChangeEvent<unknown>) => {
    setPage(page + 1);
  };

  useEffect(() => {
    totalPages > 500 ? setTotalPages(500) : totalPages;
    page <= 1 ? setLeft(true) : setLeft(false);
    page >= totalPages ? setRight(true) : setRight(false);
  }, [page, totalPages, setTotalPages]);

  return (
    <Box
      sx={{
        width: "40%",
        margin: "90px auto 180px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        sx={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: left ? "gray" : "#5141EA;",
        }}
        disabled={left}
        onClick={handlePageAnterior}
      >
        <Box
          component={"img"}
          src={Anterior}
          alt="ArrowAnterior"
          sx={{
            borderRadius: "50%",
            cursor: "pointer",
          }}
        ></Box>
      </Button>
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "poppins, sans-serif",
          fontSize: "35px",
          fontWeight: 400,
          marginLeft: "29px",
        }}
      >
        {page}
      </Typography>
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "poppins, sans-serif",
          fontSize: "40px",
          fontWeight: 400,
        }}
      >
        /
      </Typography>
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "poppins, sans-serif",
          fontSize: "30px",
          fontWeight: 400,
          marginRight: "29px",
        }}
      >
        {totalPages}
      </Typography>
      <Button
        sx={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: right ? "gray" : "#5141EA;",
        }}
        onClick={handlePageSiguiente}
        disabled={right}
      >
        <Box
          component={"img"}
          src={Siguiente}
          alt="ArrowSiguiente"
          sx={{
            cursor: "pointer",
          }}
        ></Box>
      </Button>
    </Box>
  );
};
