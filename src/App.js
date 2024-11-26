import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import { Box } from "@mui/material";

const App = () => {
  const [currentPage, setCurrentPage] = useState("users");

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar onNavigate={setCurrentPage} />
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        {currentPage === "users" && <UserManagement />}
        {currentPage === "roles" && <RoleManagement />}
      </Box>
    </Box>
  );
};

export default App;
