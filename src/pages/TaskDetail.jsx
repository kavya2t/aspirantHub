import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function TaskDetails() {
  const { selectedTask, updateTask, deleteTask } = useContext(AppContext);
  const [title, setTitle] = useState(selectedTask?.title || "");
  const [description, setDescription] = useState(selectedTask?.description || "");
  const navigate = useNavigate();

  if (!selectedTask) return <p>No task selected</p>;

  const saveTask = () => {
    updateTask(selectedTask.id, { title, description });
    navigate("/tasks"); // go back to task list
  };

  const removeTask = () => {
    deleteTask(selectedTask.id);
    navigate("/tasks");
  };

  return (
    <div className="container mt-4">
      <h2>Edit Task</h2>
      <div className="mb-3">
        <label>Title</label>
        <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        <label>Description</label>
        <textarea className="form-control" rows={3} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <button className="btn btn-success me-2" onClick={saveTask}>Save</button>
      <button className="btn btn-danger" onClick={removeTask}>Delete</button>
    </div>
  );
}