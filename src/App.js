import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Add } from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Main />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
