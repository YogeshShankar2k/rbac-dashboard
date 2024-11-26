import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = ({ onNavigate }) => {
  return (
    <Box sx={{ width: 200, backgroundColor: "#f4f4f4", height: "100vh" }}>
      <List>
        <ListItem button onClick={() => onNavigate("users")}>
          <ListItemText primary="User Management" />
        </ListItem>
        <ListItem button onClick={() => onNavigate("roles")}>
          <ListItemText primary="Role Management" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
