// src/components/GoalCard.jsx
import React, { useState } from "react";

export default function GoalCard({ goal, onDelete, onToggle, onClick }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(goal.title);

  const save = () => {
    goal.title = title; // update title
    setEditing(false);
  };

  return (
    <div
      className={`card mb-2 ${goal.completed ? "bg-light" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={() => onClick && onClick(goal.id)}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div onClick={(e) => e.stopPropagation()}>
          <div className="d-flex align-items-center gap-2">
            <input type="checkbox" checked={goal.completed} onChange={onToggle} />
            {!editing ? <strong>{goal.title}</strong> : <input className="form-control form-control-sm" value={title} onChange={(e) => setTitle(e.target.value)} />}
          </div>
        </div>

        <div className="d-flex gap-2" onClick={(e) => e.stopPropagation()}>
          {!editing ? <button className="btn btn-outline-secondary btn-sm" onClick={() => setEditing(true)}>Edit</button> : <button className="btn btn-success btn-sm" onClick={save}>Save</button>}
          <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
