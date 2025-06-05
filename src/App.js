import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import { TodosContext } from "./contexts/TodosContext";
// import { TodosTypeContext } from "./contexts/TodosTypeContext";
import Toast from "./components/Toast";
import { ToastContext } from "./contexts/ToastContext";

const theme = createTheme({
  typography: {
    fontFamily: ["ancizar"],
  },
});

let todosJsx = [
  // {
  //   id: uuidv4(),
  //   title: "Edit Colors",
  //   details: "Add gradient to Todo.js background color",
  //   isCompleted: false,
  // },
  // {
  //   id: uuidv4(),
  //   title: "Pray",
  //   details: "Pray the whole five prayers today.",
  //   isCompleted: false,
  // },
];

function App() {
  const [todos, setTodos] = useState(todosJsx);

  // Toast Logic
  const [openToast, setOpenToast] = useState(false);
  const handleOpenToast = () => {
    setOpenToast(true);
  };
  const handleCloseToast = () => {
    setOpenToast(false);
  };
  // ===== Toast Logic =====

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
        <TodosContext.Provider value={{ todos, setTodos }}>
          <ToastContext.Provider
            value={{
              openToast,
              handleOpenToast,
              handleCloseToast,
            }}
          >
            <Toast />
            <TodoList />
          </ToastContext.Provider>
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
