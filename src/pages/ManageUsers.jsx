import React, { useState } from "react";

export default function ManageUsers() {
  const [users, setUsers] = useState([
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
  ]);

  const removeUser = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
  };

  return (
    <div>
      <h2 className="text-center mb-4">Manage Users</h2>
      <ul className="list-group">
        {users.map((user, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {user.name} ({user.email})
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeUser(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
