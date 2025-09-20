// src/pages/Admin.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Admin() {
  const { tasks, goals, habits } = useContext(AppContext);

  return (
    <div className="container my-4">
      <h2>Admin Dashboard</h2>
      <div className="mb-3">
        <h4>All Tasks ({tasks.length})</h4>
        {tasks.map((t) => <p key={t.id}>{t.title}</p>)}
      </div>
      <div className="mb-3">
        <h4>All Goals ({goals.length})</h4>
        {goals.map((g) => <p key={g.id}>{g.title}</p>)}
      </div>
      <div className="mb-3">
        <h4>All Habits ({habits.length})</h4>
        {habits.map((h) => <p key={h.id}>{h.title}</p>)}
      </div>
    </div>
  );
}
