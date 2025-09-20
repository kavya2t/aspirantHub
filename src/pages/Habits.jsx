// src/pages/Habits.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import HabitCard from "../components/HabitCard";
import { useNavigate } from "react-router-dom";

export default function Habits() {
  const { habits, markHabitComplete } = useContext(AppContext);
  const navigate = useNavigate();

  const handleOpenHabit = (habitId) => {
    navigate(`/habits/${habitId}`);
  };

  return (
    <div>
      <h3 className="mb-3">My Habits ({habits.length})</h3>
      {habits.length === 0 && <p className="text-muted">No habits yet. Add one from Home.</p>}

      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onToggle={() => markHabitComplete(habit.id)}
          onClick={() => handleOpenHabit(habit.id)}
        />
      ))}
    </div>
  );
}
