import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function CategoriesList() {
  return (
    <ToggleButtonGroup
      sx={{ boxShadow: "0px 1px 2px rgba(0,0,0,0.4)" }}
      exclusive
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="done">Done</ToggleButton>
      <ToggleButton value="not done">Not Done</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default CategoriesList;
