import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Button,
} from "@mui/material";

const PermissionsTable = ({ role, availablePermissions, onUpdate }) => {
  const [permissions, setPermissions] = useState(role.permissions);

  const handleTogglePermission = (permission) => {
    const updatedPermissions = permissions.includes(permission)
      ? permissions.filter((perm) => perm !== permission)
      : [...permissions, permission];

    setPermissions(updatedPermissions);

    // Notify parent component of changes
    if (onUpdate) {
      onUpdate(role.id, updatedPermissions);
    }
  };

  return (
    <div>
      <h3>Manage Permissions for {role.name}</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Permission</TableCell>
            <TableCell>Enabled</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {availablePermissions.map((permission) => (
            <TableRow key={permission}>
              <TableCell>{permission}</TableCell>
              <TableCell>
                <Checkbox
                  checked={permissions.includes(permission)}
                  onChange={() => handleTogglePermission(permission)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        onClick={() => alert("Permissions saved successfully!")}
      >
        Save Changes
      </Button>
    </div>
  );
};

export default PermissionsTable;
