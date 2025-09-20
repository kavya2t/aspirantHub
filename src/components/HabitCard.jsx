// src/components/HabitCard.jsx
import React from "react";

export default function HabitCard({ habit, onToggle, onClick }) {
  return (
    <div
      className={`card mb-2 ${habit.completed ? "bg-light" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={() => onClick && onClick(habit.id)}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div onClick={(e) => e.stopPropagation()}>
          <div className="d-flex align-items-center gap-2">
            <input type="checkbox" checked={habit.completed} onChange={onToggle} />
            <strong>{habit.title}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
