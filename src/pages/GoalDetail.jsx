// src/pages/GoalDetail.jsx
import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function GoalDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { goals, updateGoal, deleteGoal } = useContext(AppContext);

  const goal = goals.find((g) => g.id === id);
  const [title, setTitle] = useState(goal?.title || "");
  const [completed, setCompleted] = useState(goal?.completed || false);

  if (!goal) return <p>Goal not found</p>;

  const handleSave = () => {
    updateGoal(id, { title, completed });
    navigate("/goals");
  };

  const handleDelete = () => {
    deleteGoal(id);
    navigate("/goals");
  };

  return (
    <div className="card p-3">
      <h4>Edit Goal</h4>
      <div className="mb-2">
        <label>Title</label>
        <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
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
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
