import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { DeleteDialogContext } from "../contexts/DeleteDialogContext";
import { TodosContext } from "../contexts/TodosContext";

function DeleteDialog() {
  const { todos, setTodos } = useContext(TodosContext);

  const { openDeleteDialog, handleCloseDeleteDialog, todo } =
    useContext(DeleteDialogContext);
  return (
    <>
      {/* Delete Dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
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
            onClick={handleCloseDeleteDialog}
            autoFocus
            sx={{ color: "#009688" }}
          >
            Cancel
          </Button>
          {/* ===== Cancel Button ===== */}
          {/* Confirm Button */}
          <Button
            sx={{ color: "#ba000d", fontWeight: "bold" }}
            onClick={() => {
              setTodos(
                todos.filter((t) => {
                  if (t.id !== todo.id) {
                    handleCloseDeleteDialog();
                    return t;
                  } else {
                    localStorage.removeItem("todos");
                  }
                })
              );
            }}
          >
            Delete
          </Button>
          {/* ===== Confirm Button ===== */}
        </DialogActions>
        {/* ===== Dialog Action Button ===== */}
      </Dialog>
      {/* ===== Delete Dialog ===== */}
    </>
  );
}

export default DeleteDialog;
