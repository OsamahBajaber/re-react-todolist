import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

function Todo({ todo, handler }) {
  return (
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
          <IconButton
            className="icon-card"
            sx={{
              color: todo.isCompleted ? "#ece7e2" : "#4caf50",
              backgroundColor: todo.isCompleted ? "#4caf50" : "#ece7e2",
            }}
            onClick={() => {
              handler(todo.id);
            }}
          >
            <CheckIcon />
          </IconButton>
          <IconButton
            className="icon-card"
            sx={{ color: "#0277bd", backgroundColor: "#ece7e2" }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            className="icon-card"
            sx={{ color: "#ba000d", backgroundColor: "#ece7e2" }}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
        {/* ===== Todo Actions ===== */}
      </Stack>
    </Card>
  );
}

export default Todo;
