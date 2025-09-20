// src/pages/Home.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Home() {
  const { tasks, goals, habits, quotes, addTaskAndNavigate, addGoalAndNavigate, addHabitAndNavigate } = useContext(AppContext);
  const navigate = useNavigate();

  const handleAddTask = () => addTaskAndNavigate({ title: "New Task", description: "" }, navigate);
  const handleAddGoal = () => addGoalAndNavigate({ title: "New Goal" }, navigate);
  const handleAddHabit = () => addHabitAndNavigate({ title: "New Habit" }, navigate);

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="container my-4">
      <h1 className="mb-4">Welcome to AspirantHub</h1>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-center p-3">
            <h5>Tasks</h5>
            <p>{tasks.length}</p>
            <button className="btn btn-primary btn-sm" onClick={handleAddTask}>Add Task</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center p-3">
            <h5>Goals</h5>
            <p>{goals.length}</p>
            <button className="btn btn-success btn-sm" onClick={handleAddGoal}>Add Goal</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center p-3">
            <h5>Habits</h5>
            <p>{habits.length}</p>
            <button className="btn btn-warning btn-sm" onClick={handleAddHabit}>Add Habit</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center p-3">
            <h5>Motivation</h5>
            <p><em>{randomQuote}</em></p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h4>Quick Links</h4>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary" onClick={() => navigate("/tasks")}>View Tasks</button>
            <button className="btn btn-outline-success" onClick={() => navigate("/goals")}>View Goals</button>
            <button className="btn btn-outline-warning" onClick={() => navigate("/habits")}>View Habits</button>
            <button className="btn btn-outline-info" onClick={() => navigate("/schedule")}>View Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
}
