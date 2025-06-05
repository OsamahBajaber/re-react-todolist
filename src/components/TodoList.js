import { useState, useContext, useEffect, useMemo } from "react";
import { Stack, Container, Typography, Card } from "@mui/material";
import CategoriesList from "./CategoriesList";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { TodosContext } from "../contexts/TodosContext";
import { TodosTypeContext } from "../contexts/TodosTypeContext";
import { ToastContext } from "../contexts/ToastContext";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [newTask, setNewTask] = useState("");
  const [todosType, setTodosType] = useState("all");

  useEffect(() => {
    const stordeTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(stordeTodos);
  }, []);

  const { handleOpenToast } = useContext(ToastContext);

  const completedTodos = useMemo(() => {
    return todos.filter((t) => {
      console.log("Completed todos");
      return t.isCompleted;
    });
  }, [todos]);

  const unCompletedTodos = useMemo(() => {
    return todos.filter((t) => {
      console.log("not completed todos");
      return !t.isCompleted;
    });
  });

  let renderedTodos =
    todosType === "done"
      ? completedTodos
      : todosType === "not done"
      ? unCompletedTodos
      : todos;
  const todosList = renderedTodos.map((t) => {
    return <Todo key={t.id} todo={t} />;
  });
  return (
    <Container maxWidth="sm">
      <Card sx={{ maxHeight: "80vh", overflow: "scroll" }}>
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
          <TodosTypeContext.Provider value={[todosType, setTodosType]}>
            <CategoriesList />
          </TodosTypeContext.Provider>
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
              disabled={
                todosType === "done" ||
                todosType === "not done" ||
                newTask.length <= 0
              }
              variant="contained"
              sx={{
                width: "30%",
                backgroundImage:
                  todosType === "done" ||
                  todosType === "not done" ||
                  newTask.length <= 0
                    ? "#ece7e2"
                    : "linear-gradient(to right, #b4662a,#e28741)",
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
                handleOpenToast();
              }}
            >
              Confirm
            </Button>
            {/* ===== Confirm Button ===== */}
          </Stack>
        </Stack>
      </Card>
    </Container>
  );
}
