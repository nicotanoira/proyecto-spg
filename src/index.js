import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SPG from "./SPG";
import { ThemeProvider } from "@mui/material";
import { theme } from "./config/DefaultTheme.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ThemeProvider theme={theme}>
		<SPG />
	</ThemeProvider>
);


