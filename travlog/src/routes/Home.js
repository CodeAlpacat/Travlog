import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBar from "./NavBar";
import Box from "@mui/material/Box";
import Feed from "../routes/Feed";
import Stack from "@mui/material/Stack";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import Add from "./Add";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const Home = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode}/>
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
