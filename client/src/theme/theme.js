import { createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const Colors = {
  primary: "#5f2c3e",
  secondary: "#d1adcc",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  ///////////////
  // Grays
  ///////////////
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230,230,230)",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const colorSettings = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: Colors.primary,
          },
          background: {
            default: Colors.black,
          },
          text: {
            primary: Colors.white,
          },
        }
      : {
          primary: {
            main: Colors.primary,
          },
          background: {
            default: Colors.light_gray,
          },
          text: {
            primary: Colors.black,
          },
        }),
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "200px",
          backgroundColor: Colors.primary,
          color: Colors.secondary,
          borderRadius: "0px 100px 0px 0px",
        },
      },
    },
  },
});

export const useMode = () => {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const modeTheme = useMemo(() => createTheme(colorSettings(mode)), [mode]);

  return [modeTheme, colorMode];
};
