import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["ancizar"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#333",
          minHeight: "100vh",
        }}
      >
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
