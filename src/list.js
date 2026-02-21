import React, { useState } from "react";

function UserListApp() {
  const [users, setUsers] = useState([
    { id: 1, name: "Jagdish", role: "Frontend Developer" },
    { id: 2, name: "Ram", role: "Backend Developer" },
    { id: 3, name: "Sita", role: "UI/UX Designer" }
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  // Remove user
  const removeUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  // Add new user
  const addUser = () => {
    if (name.trim() === "" || role.trim() === "") return;

    const newUser = {
      id: Date.now(), // unique id
      name: name,
      role: role
    };

    setUsers([...users, newUser]);
    setName("");
    setRole("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List App</h2>

      {/* Add User Section */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div>

      {/* Display Users */}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.role}
            <button
              onClick={() => removeUser(user.id)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListApp;
