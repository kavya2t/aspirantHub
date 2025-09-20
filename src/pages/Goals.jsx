// src/pages/Goals.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import GoalCard from "../components/GoalCard";
import { useNavigate } from "react-router-dom";

export default function Goals() {
  const { goals, deleteGoal, updateGoal } = useContext(AppContext);
  const navigate = useNavigate();

  const handleOpenGoal = (goalId) => {
    navigate(`/goals/${goalId}`);
  };

  return (
    <div>
      <h3 className="mb-3">My Goals ({goals.length})</h3>

      {goals.length === 0 && <p className="text-muted">No goals yet. Add one from Home.</p>}

      {goals.map((goal) => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onDelete={() => deleteGoal(goal.id)}
          onToggle={() => updateGoal(goal.id, { completed: !goal.completed })}
          onClick={() => handleOpenGoal(goal.id)}
        />
      ))}
    </div>
  );
}
