import React, { useEffect, useState } from "react";
import { fetchRoles, addRole, deleteRole } from "../api";
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRoles().then((res) => setRoles(res.data));
  }, []);

  const handleAddRole = () => {
    const newRole = { name: "New Role", permissions: ["Read"] };
    addRole(newRole).then(() => fetchRoles().then((res) => setRoles(res.data)));
  };

  const handleDeleteRole = (id) => {
    deleteRole(id).then(() => fetchRoles().then((res) => setRoles(res.data)));
  };

  return (
    <div>
      <h2>Role Management</h2>
      <Button onClick={handleAddRole}>Add Role</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Permissions</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.permissions.join(", ")}</TableCell>
              <TableCell>
                <Button onClick={() => handleDeleteRole(role.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RoleManagement;
