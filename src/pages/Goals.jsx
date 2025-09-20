import React, { useState } from "react";

export default function Goals() {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState("");

  const addGoal = () => {
    if (goal.trim() !== "") {
      setGoals([...goals, goal]);
      setGoal("");
    }
  };

  const removeGoal = (index) => {
    const newGoals = goals.filter((_, i) => i !== index);
    setGoals(newGoals);
  };

  return (
    <div>
      <h2 className="text-center mb-4">Your Goals</h2>
      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="New goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button className="btn btn-warning" onClick={addGoal}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {goals.map((g, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {g}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeGoal(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
