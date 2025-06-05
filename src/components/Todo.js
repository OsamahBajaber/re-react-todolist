import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { DeleteDialogContext } from "../contexts/DeleteDialogContext";
import DeleteDialog from "./DeleteDialog";
import { EditDialogContext } from "../contexts/EditDialogContext";
import EditDialog from "./EditDialog";
import { ToastContext } from "../contexts/ToastContext";

function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Toast Context
  const { handleOpenToast } = useContext(ToastContext);
  // ===== Toast Context =====

  // Delete Dialog Logic
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDeleteDialog(true);
  };
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };
  // ===== Delete Dialog Logic =====

  // Edit Dialog Logic
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editInput, setEditInput] = useState({
    title: todo.title,
    details: todo.details,
  });

  const handleOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  // ===== Edit Dialog Logic =====

  return (
    <>
      {/* Edit Dialog */}
      <EditDialogContext.Provider
        value={{
          editInput,
          setEditInput,
          handleCloseEditDialog,
          openEditDialog,
          todo,
        }}
      >
        <EditDialog />
      </EditDialogContext.Provider>
      {/* ===== Edit Dialog ===== */}
      {/* Delete Dialog */}
      <DeleteDialogContext.Provider
        value={{
          openDeleteDialog,
          handleCloseDeleteDialog,
          todo,
        }}
      >
        <DeleteDialog />
      </DeleteDialogContext.Provider>
      {/* ===== Delete Dialog ===== */}

      {/* Todo Card */}
      <Card
        className="todo-card"
        sx={{
          width: "90%",
          backgroundImage: "linear-gradient(to right, #008081,#009688)",
          color: "white",
          transition: "0.3s",
          boxShadow: "0px 5px 7px rgba(0,0,0,0.4)",
        }}
      >
        <Stack direction="row">
          {/* Todos Details */}
          <CardContent sx={{ width: "70%", gap: "5px" }}>
            <Typography gutterBottom variant="h5" component="div">
              {todo.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              {todo.details}
            </Typography>
          </CardContent>
          {/* ===== Todos Details ===== */}

          {/* Todo Actions */}
          <CardActions sx={{ width: "30%", padding: "2" }}>
            {/* Check Button */}
            <IconButton
              className="icon-card"
              sx={{
                color: todo.isCompleted ? "#ece7e2" : "#4caf50",
                backgroundColor: todo.isCompleted ? "#4caf50" : "#ece7e2",
              }}
              onClick={() => {
                setTodos(
                  todos.map((t) => {
                    return t.id === todo.id
                      ? t.isCompleted
                        ? { ...t, isCompleted: false }
                        : { ...t, isCompleted: true }
                      : t;
                  })
                );
                handleOpenToast();
              }}
            >
              <CheckIcon />
            </IconButton>
            {/* ===== Check Button ===== */}
            {/* Edit Button */}
            <IconButton
              className="icon-card"
              sx={{ color: "#0277bd", backgroundColor: "#ece7e2" }}
              onClick={handleOpenEditDialog}
            >
              <EditIcon />
            </IconButton>
            {/* ===== Edit Button ===== */}
            {/* Delete Button */}
            <IconButton
              className="icon-card"
              sx={{ color: "#ba000d", backgroundColor: "#ece7e2" }}
              onClick={handleOpenDialog}
            >
              <DeleteIcon />
            </IconButton>
            {/* ===== Delete Button ===== */}
          </CardActions>
          {/* ===== Todo Actions ===== */}
        </Stack>
      </Card>
    </>
  );
}

export default Todo;
