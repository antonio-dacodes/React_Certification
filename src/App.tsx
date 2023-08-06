import { ThemeProvider } from "@mui/material";
import { routes } from "./navigation/routes";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/header/Navbar";
import { Footer } from "./components/footer/Footer";
import PrivateRoutes from "./navigation/PrivateRoutes";

export default function App() {
  return (
    <>
      <ThemeProvider theme={""}>
        <Navbar />
        <Routes>
          {routes.map(({ path, component }, i) =>
            path === "/movies" ? (
              <Route element={<PrivateRoutes />}>
                <Route key={i} path={path} Component={component} />
              </Route>
            ) : (
              <Route key={i} path={path} Component={component} />
            )
          )}
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}
