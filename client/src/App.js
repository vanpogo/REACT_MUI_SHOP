import { Container, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "./components/AppBar/AppBar";
import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme/theme";
import AppDrawer from "./components/AppBar/AppDrawer";
import { UIProvider } from "./context";
import FullSearchBox from "./components/Search/FullSearchBox";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SingleProduct from "./components/Product/SingleProduct";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "./redux/slices/Product/productSlice";

function App() {
  const [modeTheme, colorMode] = useMode();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={modeTheme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <UIProvider>
            <AppBar matches={matches} />
            {matches && <AppDrawer />}
            <FullSearchBox />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<SingleProduct />} />
            </Routes>
          </UIProvider>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
