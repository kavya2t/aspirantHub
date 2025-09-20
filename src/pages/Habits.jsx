import React, { useState } from "react";

export default function Habits() {
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState("");

  const addHabit = () => {
    if (habit) {
      setHabits([...habits, habit]);
      setHabit("");
    }
  };

  const removeHabit = (index) => {
    const newHabits = habits.filter((_, i) => i !== index);
    setHabits(newHabits);
  };

  return (
    <div>
      <h2 className="text-center mb-4">Habit Tracker</h2>
      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="New habit"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
        />
        <button className="btn btn-success" onClick={addHabit}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {habits.map((h, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {h}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeHabit(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
