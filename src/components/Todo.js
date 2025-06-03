import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/material";
import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";

function Todo({ todo }) {
  // console.log(todo);
  const { todos, setTodos } = useContext(TodosContext);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDeleteDialog(false);
  };

  return (
    <>
      {/* Delete Dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* Dialog Title */}
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
            delete confirmation alert
          </Typography>
        </DialogTitle>
        {/* ===== Dialog Title ===== */}
        {/* Dialog Body */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="h6">
              Are you sure you want to delete this task?
            </Typography>
          </DialogContentText>
        </DialogContent>
        {/* ===== Dialog Body ===== */}
        {/* Dialog Action Button */}
        <DialogActions>
          {/* Cancel Button */}
          <Button
            onClick={handleCloseDialog}
            autoFocus
            sx={{ color: "#ba000d", fontWeight: "bold" }}
          >
            Cancel
          </Button>
          {/* ===== Cancel Button ===== */}
          {/* Confirm Button */}
          <Button
            onClick={() => {
              setTodos(
                todos.filter((t) => {
                  if (t.id !== todo.id) {
                    handleCloseDialog();
                    return { ...t };
                  }
                })
              );
            }}
          >
            Confirm
          </Button>
          {/* ===== Confirm Button ===== */}
        </DialogActions>
        {/* ===== Dialog Action Button ===== */}
      </Dialog>
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
                      : { ...t };
                  })
                );
              }}
            >
              <CheckIcon />
            </IconButton>
            {/* ===== Check Button ===== */}
            {/* Edit Button */}
            <IconButton
              className="icon-card"
              sx={{ color: "#0277bd", backgroundColor: "#ece7e2" }}
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
