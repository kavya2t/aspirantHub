// src/pages/Tasks.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const { tasks, deleteTask, updateTask } = useContext(AppContext);
  const navigate = useNavigate();

  const handleOpenTask = (taskId) => {
    navigate(`/tasks/${taskId}`); // redirect to individual task page
  };

  return (
    <div>
      <h3 className="mb-3">My Tasks ({tasks.length})</h3>

      {tasks.length === 0 && <p className="text-muted">No tasks yet. Add one from Home.</p>}

      {tasks.map((t) => (
  <div key={t.id} onClick={() => {
    selectTask(t);  // from AppContext
    navigate("/task-details");
  }}>
    <TaskCard task={t} onDelete={() => deleteTask(t.id)} onToggle={() => updateTask(t.id, { status: t.status === "done" ? "pending" : "done" })} onEdit={(patch) => updateTask(t.id, patch)} />
  </div>
))}
    </div>
  );
}