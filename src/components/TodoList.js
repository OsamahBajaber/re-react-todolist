import { useState, useContext, useEffect } from "react";
import { Stack, Container, Typography } from "@mui/material";
import CategoriesList from "./CategoriesList";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { TodosContext } from "../contexts/TodosContext";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const stordeTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(stordeTodos);
    console.log("useEffect");
  }, []);

  const todosList = todos.map((t) => {
    return <Todo key={t.id} todo={t} />;
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
              setTodos((t) => {
                const queuedTodos = [...t, newTodo];
                localStorage.setItem("todos", JSON.stringify(queuedTodos));
                return queuedTodos;
              });
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
