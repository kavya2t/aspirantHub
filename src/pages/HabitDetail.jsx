// src/pages/HabitDetail.jsx
import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function HabitDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { habits, markHabitComplete } = useContext(AppContext);

  const habit = habits.find((h) => h.id === id);
  const [completed, setCompleted] = useState(habit?.completed || false);

  if (!habit) return <p>Habit not found</p>;

  const handleSave = () => {
    markHabitComplete(id);
    navigate("/habits");
  };

  return (
    <div className="card p-3">
      <h4>Edit Habit</h4>
      <div className="mb-2">
        <label>Title</label>
        <input className="form-control" value={habit.title} readOnly />
      </div>
      <div className="mb-2">
        <label>Status</label>
        <select className="form-select" value={completed} onChange={(e) => setCompleted(e.target.value === "true")}>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
      </div>
      <div className="d-flex gap-2">
        <button className="btn btn-success" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
