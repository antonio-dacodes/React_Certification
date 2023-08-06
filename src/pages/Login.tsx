import { Box, Container } from "@mui/material";
import { TitleLink } from "../components/general/screen/TitleLink";
import { FormLogin } from "../components/general/screen/FormLogin";

export const Login = () => {
  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          height: "270px",
          display: "flex",
          alignItems: "end",
        }}
      >
        <TitleLink title={"Login"} description={"¡Bienvenido!"} />
      </Box>
      <FormLogin />
    </Container>
  );
};
