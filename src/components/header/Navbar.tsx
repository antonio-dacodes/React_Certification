import { Container, Box, Grid, Typography } from "@mui/material";
import Logo from "../../assets/images/DacodesLogo.png";
import Login from "../../assets/images/Login.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "#5141EA",
        height: "110px",
      }}
    >
      <Grid
        sx={{
          height: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "10px",
          position: "relative",
        }}
      >
        <Box component={"img"} src={Logo} alt="LogoDacodesNavbar"></Box>
        <Box
          component={"img"}
          src={Login}
          alt="Login"
          sx={{
            cursor:
              window.location.pathname === "/movies" ? "pointer" : "default",
          }}
          onMouseEnter={() => {
            window.location.pathname === "/movies"
              ? setMessage("Logout")
              : setMessage("");
          }}
          onMouseLeave={() => {
            setMessage("");
          }}
          onClick={() => {
            sessionStorage.removeItem("token");
            navigate("/React_Certification");
          }}
        ></Box>
        <Typography
          sx={{
            position: "absolute",
            right: "0%",
            top: "80%",
            background: "#6e3e28",
            fontFamily: "poppins, sans-serif",
            fontSize: " 16px",
            fontWeight: 600,
            color: "#FFF",
            borderRadius: "10px",
            width: "100px",
            textAlign: "center",
          }}
        >
          {message}
        </Typography>
      </Grid>
    </Container>
  );
};
