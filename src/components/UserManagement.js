import React, { useEffect, useState } from "react";
import { fetchUsers, addUser, deleteUser, updateUser } from "../api";
import { Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from "@mui/material";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({ name: "", role: "" });
  const [newUser, setNewUser] = useState({ name: "", role: "" }); 

  useEffect(() => {
    fetchUsers().then((res) => setUsers(res.data));
  }, []);

  const handleAddUser = () => {
    if (!newUser.name || !newUser.role) {
      alert("Please provide both name and role for the user.");
      return;
    }
    const userData = {
      name: newUser.name,
      role: newUser.role,
    };
    addUser(userData).then(() => {
      fetchUsers().then((res) => setUsers(res.data));
      setNewUser({ name: "", role: "" });  
    });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id).then(() => fetchUsers().then((res) => setUsers(res.data)));
  };

  const handleEditUser = (user) => {
    setIsEditing(user.id);
    setUpdatedUser({ name: user.name, role: user.role });
  };

  const handleUpdateUser = (id) => {
    updateUser(id, updatedUser).then(() => {
      fetchUsers().then((res) => setUsers(res.data));
      setIsEditing(null);
      setUpdatedUser({ name: "", role: "" });
    });
  };

  return (
    <div>
      <h2>User Management</h2>

      <div>
        <h3>Add New User</h3>
        <TextField
          label="User Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleAddUser}>
          Add User
        </Button>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                {isEditing === user.id ? (
                  <TextField
                    value={updatedUser.name}
                    onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
                  />
                ) : (
                  user.name
                )}
              </TableCell>
              <TableCell>
                {isEditing === user.id ? (
                  <TextField
                    value={updatedUser.role}
                    onChange={(e) => setUpdatedUser({ ...updatedUser, role: e.target.value })}
                  />
                ) : (
                  user.role
                )}
              </TableCell>
              <TableCell>
                {isEditing === user.id ? (
                  <>
                    <Button onClick={() => handleUpdateUser(user.id)}>Save</Button>
                    <Button onClick={() => setIsEditing(null)}>Cancel</Button>
                  </>
                ) : (
                  <>
                    <Button onClick={() => handleEditUser(user)}>Edit</Button>
                    <Button onClick={() => handleDeleteUser(user.id)}>Delete</Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserManagement;
