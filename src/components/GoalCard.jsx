import React from "react";

export default function GoalCard({ goal, onDelete }) {
  return (
    <div className="card mb-2 shadow-sm">
      <div className="card-body d-flex justify-content-between">
        <span>{goal}</span>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
