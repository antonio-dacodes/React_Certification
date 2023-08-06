import { Container, Box, Typography } from "@mui/material";
import Vector from "../../assets/images/Vector.png";
import Best from "../../assets/images/BestPlace.png";
import Great from "../../assets/images/LogoGPTW.png";
import Efy from "../../assets/images/Efy.png";
import Aws from "../../assets/images/Aws.png";

export const Footer = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100%",
        padding: "0 !important",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${Vector})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            width: "90%",
            margin: "0 auto",
            paddingTop: "224px",
          }}
        >
          <Typography
            component={"h2"}
            sx={{
              color: "#FFF",
              fontFamily: "poppins, sans-serif",
              fontSize: "45px",
              fontWeight: "600px",
            }}
          >
            We are coding the world of tomorrow_
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "poppins, sans-serif",
              fontSize: "30px",
              fontWeight: "400px",
              lineHeight: "normal",
            }}
          >
            DaCodes es una de las mejores empresas de desarrollo de software en
            México y LATAM. Lo que nos separa de los demás es el nivel de
            involucramiento que tenemos en nuestros proyectos y la pasión que
            tenemos por desarrollar productos digitales de calidad mundial.
            Somos un equipo de 220+ dacoders especializados en la planeación,
            diseño, desarrollo, implementación e innovación continua de
            productos digitales disruptivos.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: " 50px 0",
              flexWrap: "wrap",
            }}
          >
            <Box
              component={"img"}
              src={Best}
              alt="LogoBest"
              sx={{
                width: "125px",
                height: "44px",
                background: "#FFF",
                borderRadius: "11px",
                boxShadow: "0px 4px 14px 0px rgba(0, 5, 63, 0.69)",
              }}
            ></Box>
            <Box
              component={"img"}
              src={Great}
              alt="LogoGreat"
              sx={{
                width: "124px",
                height: "88px",
              }}
            ></Box>
            <Box
              component={"img"}
              src={Efy}
              alt="LogoEfy"
              sx={{
                width: "141px",
                height: "50px",
              }}
            ></Box>
            <Box
              component={"img"}
              src={Aws}
              alt="LogoAws"
              sx={{
                width: "92px",
                height: "93px",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
