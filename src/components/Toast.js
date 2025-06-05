import { useContext } from "react";
import { ToastContext } from "../contexts/ToastContext";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Toast() {
  const { openToast, handleOpenToast, handleCloseToast } =
    useContext(ToastContext);

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseToast}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Button onClick={handleOpenToast}>Open Snackbar</Button>
      <Snackbar
        open={openToast}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        message="Note archived"
        action={action}
      />
    </div>
  );
}
