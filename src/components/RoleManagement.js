import React, { useEffect, useState } from "react";
import { fetchRoles, addRole, deleteRole, updateRole } from "../api";
import { Table, TableHead, TableRow, TableCell, TableBody, Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [updatedRole, setUpdatedRole] = useState({ name: "", permissions: "" });
  const [newRole, setNewRole] = useState({ name: "", permissions: "" });  

  useEffect(() => {
    fetchRoles().then((res) => setRoles(res.data));
  }, []);

  const handleAddRole = () => {
    if (!newRole.name || !newRole.permissions) {
      alert("Please provide both name and permissions for the role.");
      return;
    }
    const roleData = {
      name: newRole.name,
      permissions: newRole.permissions.split(",").map((perm) => perm.trim()),
    };
    addRole(roleData).then(() => {
      fetchRoles().then((res) => setRoles(res.data));
      setNewRole({ name: "", permissions: "" });  
    });
  };

  const handleDeleteRole = (id) => {
    deleteRole(id).then(() => fetchRoles().then((res) => setRoles(res.data)));
  };

  const handleEditRole = (role) => {
    setIsEditing(role.id);
    setUpdatedRole({ name: role.name, permissions: role.permissions.join(", ") });
  };

  const handleUpdateRole = (id) => {
    const updatedData = {
      ...updatedRole,
      permissions: updatedRole.permissions.split(",").map((perm) => perm.trim()),
    };
    updateRole(id, updatedData).then(() => {
      fetchRoles().then((res) => setRoles(res.data));
      setIsEditing(null);
      setUpdatedRole({ name: "", permissions: "" });
    });
  };

  return (
    <div>
      <h2>Role Management</h2>

      <div>
        <h3>Add New Role</h3>
        <TextField
          label="Role Name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Permissions (comma separated)"
          value={newRole.permissions}
          onChange={(e) => setNewRole({ ...newRole, permissions: e.target.value })}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleAddRole}>
          Add Role
        </Button>
      </div>

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
              <TableCell>
                {isEditing === role.id ? (
                  <TextField
                    value={updatedRole.name}
                    onChange={(e) => setUpdatedRole({ ...updatedRole, name: e.target.value })}
                  />
                ) : (
                  role.name
                )}
              </TableCell>
              <TableCell>
                {isEditing === role.id ? (
                  <TextField
                    value={updatedRole.permissions}
                    onChange={(e) => setUpdatedRole({ ...updatedRole, permissions: e.target.value })}
                  />
                ) : (
                  role.permissions.join(", ")
                )}
              </TableCell>
              <TableCell>
                {isEditing === role.id ? (
                  <>
                    <Button onClick={() => handleUpdateRole(role.id)}>Save</Button>
                    <Button onClick={() => setIsEditing(null)}>Cancel</Button>
                  </>
                ) : (
                  <>
                    <Button onClick={() => handleEditRole(role)}>Edit</Button>
                    <Button onClick={() => handleDeleteRole(role.id)}>Delete</Button>
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

export default RoleManagement;
