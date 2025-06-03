import { useState } from "react";
import { Stack, Container, Typography } from "@mui/material";
import CategoriesList from "./CategoriesList";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

export default function TodoList() {
  let todosJsx = [
    {
      id: uuidv4(),
      title: "Edit Colors",
      details: "Add gradient to Todo.js background color",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Pray",
      details: "Pray the whole five prayers today.",
      isCompleted: false,
    },
  ];
  const [todos, setTodos] = useState(todosJsx);
  const [newTask, setNewTask] = useState("");

  const todosList = todos.map((t) => {
    return (
      <Todo
        key={t.id}
        todo={t}
        handler={(todoId) => {
          setTodos(
            todos.map((t) => {
              return t.id === todoId
                ? t.isCompleted
                  ? { ...t, isCompleted: false }
                  : { ...t, isCompleted: true }
                : { ...t };
            })
          );
        }}
      />
    );
  });
  return (
    <Container maxWidth="sm">
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: "white",
          borderRadius: "6px",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Tasks
        </Typography>
        <hr
          style={{ width: "90%", marginTop: "-15px", marginBottom: "10px" }}
        />
        <CategoriesList />

        {todosList}

        <Stack direction="row" sx={{ width: "90%" }} spacing={2}>
          <TextField
            sx={{ width: "70%" }}
            label="Add Task"
            variant="outlined"
            color="#e28741"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />
          {/* Confirm Button */}
          <Button
            variant="contained"
            sx={{
              width: "30%",
              backgroundImage: "linear-gradient(to right, #b4662a,#e28741)",
            }}
            onClick={() => {
              const newTodo = {
                id: uuidv4(),
                title: newTask,
                details: "",
                isCompleted: false,
              };
              setTodos([...todos, newTodo]);
              setNewTask("");
            }}
          >
            Confirm
          </Button>
          {/* ===== Confirm Button ===== */}
        </Stack>
      </Stack>
    </Container>
  );
}
