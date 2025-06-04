import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState, useContext } from "react";
import { TodosTypeContext } from "../contexts/TodosTypeContext";

function CategoriesList() {
  const [todosType, setTodosType] = useContext(TodosTypeContext);

  return (
    <ToggleButtonGroup
      sx={{ boxShadow: "0px 1px 2px rgba(0,0,0,0.4)" }}
      exclusive
      value={todosType}
      onChange={(e) => {
        setTodosType(e.target.value);
      }}
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="done">Done</ToggleButton>
      <ToggleButton value="not done">Not Done</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default CategoriesList;
