import React, { useEffect, useState } from "react";
import { fetchUsers, addUser, updateUser, deleteUser } from "../api";
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((res) => setUsers(res.data));
  }, []);

  const handleAddUser = () => {
    const newUser = { name: "New User", role: "Viewer", status: "Active" };
    addUser(newUser).then(() => fetchUsers().then((res) => setUsers(res.data)));
  };

  const handleDeleteUser = (id) => {
    deleteUser(id).then(() => fetchUsers().then((res) => setUsers(res.data)));
  };

  return (
    <div>
      <h2>User Management</h2>
      <Button onClick={handleAddUser}>Add User</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <Button onClick={() => handleDeleteUser(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserManagement;
