// src/components/TaskCard.jsx
import React, { useState } from "react";

export default function TaskCard({ task, onDelete, onToggle, onEdit, onClick }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const save = () => {
    onEdit({ title });
    setEditing(false);
  };

  return (
    <div
      className={`card mb-2 ${task.status === "done" ? "bg-light" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={() => onClick && onClick(task.id)}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div onClick={(e) => e.stopPropagation()}>
          <div className="d-flex align-items-center gap-2">
            <input type="checkbox" checked={task.status === "done"} onChange={onToggle} />
            {!editing ? (
              <strong>{task.title}</strong>
            ) : (
              <input
                className="form-control form-control-sm"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            )}
          </div>
          <div className="text-muted small">
            {task.dueDate ? `Due: ${task.dueDate}` : ""} &nbsp; • &nbsp; {task.priority}
          </div>
          {task.description && <div className="mt-2">{task.description}</div>}
        </div>

        <div className="d-flex gap-2" onClick={(e) => e.stopPropagation()}>
          {!editing ? (
            <button className="btn btn-outline-secondary btn-sm" onClick={() => setEditing(true)}>
              Edit
            </button>
          ) : (
            <button className="btn btn-success btn-sm" onClick={save}>
              Save
            </button>
          )}
          <button className="btn btn-danger btn-sm" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
