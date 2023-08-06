/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Box, Checkbox, Grid, Typography } from "@mui/material";
import { InputsLogin } from "../inputs/InputsLogin";
import { useEffect, useState } from "react";
import Check from "../../../assets/images/Check.png";
import { ButtonLink } from "../buttons/ButtonLink";
import { getSession } from "../../../api/getSession";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const validateEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const validatePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [email, setEmail] = useState<string>("");
  const [contraseña, setContraseña] = useState<string>("");
  const [check, setCheck] = useState(false);
  const [errorEmail, setErrorEmail] = useState({
    message: "",
    isError: false,
  });
  const [errorPass, setErrorPass] = useState({
    message: "",
    isError: false,
  });

  const handleChangeCheck = (e: any) => {
    setCheck(e.target.checked);
  };

  const handleClick = () => {
    !valid()
      ? sessionStorage.setItem("token", "")
      : sessionStorage.setItem("token", token);
    navigate("/movies");
  };

  const valid = () => {
    if (email === "") {
      return false;
    } else if (contraseña === "") {
      return false;
    } else if (!check) {
      return false;
    } else if (errorEmail.isError) {
      return false;
    } else if (errorPass.isError) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    (async () => {
      const session: any = await getSession();
      setToken(session.data.guest_session_id);
    })();
    window.scroll(0, 0);
  }, []);

  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "88%",
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "poppins, sans-serif",
            fontSize: "20px",
            fontWeight: 400,
            paddingLeft: "30px",
            marginBottom: "17px",
          }}
        >
          Correo electrónico de DaCodes
        </Typography>
        <InputsLogin
          id="email"
          value={email}
          placeholder={"Correo Dacodes"}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              padding: "0px",
              borderWidth: "0px",
              borderStyle: "none",
            },
          }}
          style={{
            borderRadius: "50px",
            background: "#5141EA",
            maxWidth: "655px",
            height: "66px",
            marginBottom: "40px",
          }}
          inputProps={{
            style: {
              height: "66px",
              padding: 0,
              borderRadius: "50px",
              color: "#FFF",
              borderStyle: "none",
              textAlign: "center",
              fontSize: "24px",
            },
          }}
          onChange={(e: any) => {
            if (e.target.value === "") {
              setErrorEmail({
                message: "!!!Parece que te falta ingresar tu correo!!!",
                isError: true,
              });
            } else {
              setErrorEmail({
                message: "",
                isError: false,
              });
            }
            setEmail(e.target.value);
          }}
          onBlur={() => {
            if (!validateEmail.test(email)) {
              setErrorEmail({
                message: "!!!Favor de ingresar un Correo valido!!!",
                isError: true,
              });
            } else {
              setErrorEmail({
                message: "",
                isError: false,
              });
            }
          }}
          helperText={
            <label
              style={{
                color: "#db3838",
                fontFamily: "poppins, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {errorEmail.message}
            </label>
          }
        />

        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "poppins, sans-serif",
            fontSize: "20px",
            fontWeight: 400,
            paddingLeft: "30px",
            marginBottom: "17px",
          }}
        >
          Contraseña
        </Typography>

        <InputsLogin
          id="contraseña"
          value={contraseña}
          placeholder={"Contraseña"}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              padding: "0px",
              borderWidth: "0px",
              borderStyle: "none",
            },
          }}
          style={{
            borderRadius: "50px",
            background: "#5141EA",
            maxWidth: "655px",
            height: "66px",
            marginBottom: "40px",
          }}
          inputProps={{
            style: {
              height: "66px",
              padding: 0,
              borderRadius: "50px",
              color: "#FFF",
              borderStyle: "none",
              textAlign: "center",
              fontSize: "24px",
            },
          }}
          onChange={(e: any) => {
            if (e.target.value === "") {
              setErrorPass({
                message: "!!!Necesitas ingresar tu contraseña!!!",
                isError: true,
              });
            } else {
              setErrorPass({
                message: "",
                isError: false,
              });
            }
            setContraseña(e.target.value);
          }}
          onBlur={() => {
            if (!validatePassword.test(contraseña)) {
              setErrorPass({
                message:
                  "!!!Ingresa 7 caracteres incluyendo por lo menos 1 letra y 1 número!!!",
                isError: true,
              });
            } else {
              setErrorPass({
                message: "",
                isError: false,
              });
            }
          }}
          helperText={
            <label
              style={{
                color: "#db3838",
                fontFamily: "poppins, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {errorPass.message}
            </label>
          }
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Checkbox
            checked={check}
            color="default"
            onChange={handleChangeCheck}
            indeterminateIcon={Check}
            sx={{
              "& .MuiSvgIcon-root": {
                backgroundColor: "rgba(217, 217, 217, 0.50)",
              },
            }}
          />
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "poppins, sans-serif",
              fontSize: "20px",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            He leido y acepto los terminos y condiciones
          </Typography>
        </Box>
        <ButtonLink
          onClick={handleClick}
          disabled={!valid()}
          text={"Crear Cuenta"}
          disableElevation={false}
          variant={"contained"}
          style={{
            width: "252px",
            height: "66px",
            background: valid()
              ? "linear-gradient(100deg,#3AE3C3, #4E6CE4)"
              : "gray",
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "30px",
            fontWeight: 600,
            fontStyle: "normal",
            textTransform: "none",
            borderRadius: "100px",
            margin: "50px 0 250px 0",
          }}
        />
      </Box>
    </Grid>
  );
};
