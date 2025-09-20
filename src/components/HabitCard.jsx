import React from "react";

export default function HabitCard({ habit, onDelete }) {
  return (
    <div className="card mb-2 shadow-sm">
      <div className="card-body d-flex justify-content-between">
        <span>{habit}</span>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Remove
        </button>
      </div>
    </div>
  );
}
