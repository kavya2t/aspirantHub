import React, { useState } from "react";

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  const addSchedule = () => {
    if (task && time) {
      setSchedule([...schedule, { task, time }]);
      setTask("");
      setTime("");
    }
  };

  const removeSchedule = (index) => {
    const newSchedule = schedule.filter((_, i) => i !== index);
    setSchedule(newSchedule);
  };

  return (
    <div>
      <h2 className="text-center mb-4">Schedule Planner</h2>
      <div className="d-flex mb-3 gap-2">
        <input
          type="text"
          placeholder="Task"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="time"
          className="form-control"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addSchedule}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {schedule.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item.time} - {item.task}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeSchedule(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
