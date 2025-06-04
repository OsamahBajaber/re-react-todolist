import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { EditDialogContext } from "../contexts/EditDialogContext";
import { TodosContext } from "../contexts/TodosContext";

function EditDialog() {
  const { todos, setTodos } = useContext(TodosContext);
  const {
    editInput,
    setEditInput,
    handleCloseEditDialog,
    openEditDialog,
    todo,
  } = useContext(EditDialogContext);

  return (
    <>
      {/* Edit Dialog */}
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>
          <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
            Edit Task ({todo.title})
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="h6">
              To edit this task, please enter new title and new details.
            </Typography>
          </DialogContentText>
          {/* Title Input */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="title"
            label="Edit Title"
            value={editInput.title}
            fullWidth
            variant="standard"
            onChange={(e) => {
              setEditInput({ ...editInput, title: e.target.value });
            }}
          />
          {/* ===== Title Input ===== */}
          {/* Details Input */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="details"
            label="Edit Details"
            value={editInput.details}
            fullWidth
            variant="standard"
            onChange={(e) => {
              setEditInput({ ...editInput, details: e.target.value });
            }}
          />
          {/* ===== Details Input ===== */}
        </DialogContent>
        {/* Dialog Action Buttons */}
        <DialogActions>
          {/* Cancel Button */}
          <Button sx={{ color: "#ba000d" }} onClick={handleCloseEditDialog}>
            Cancel
          </Button>
          {/* ===== Cancel Button ===== */}
          {/* Confirm Button */}
          <Button
            sx={{ fontWeight: "bold", color: "#0277bd" }}
            onClick={() => {
              setTodos(
                todos.map((t) => {
                  if (t.id === todo.id) {
                    handleCloseEditDialog();
                    return {
                      ...t,
                      title: editInput.title,
                      details: editInput.details,
                    };
                  } else {
                    return t;
                  }
                })
              );
            }}
          >
            Confirm
          </Button>
          {/* ===== Confirm Button ===== */}
        </DialogActions>
        {/* ===== Dialog Action Buttons ===== */}
      </Dialog>
      {/* ===== Edit Dialog ===== */}
    </>
  );
}

export default EditDialog;
