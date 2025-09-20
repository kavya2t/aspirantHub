// src/context/AppContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // --- USER ---
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  ); // {id, name, email, role, premium}

  const addGoalAndNavigate = (goal, navigate) => {
  const newGoal = { ...goal, id: generateId(), completed: false };
  setGoals([...goals, newGoal]);
  navigate("/goals");
  };

  const addHabitAndNavigate = (habit, navigate) => {
  const newHabit = { ...habit, id: generateId(), completed: false };
  setHabits([...habits, newHabit]);
  navigate("/habits");
  };

  const [selectedTask, setSelectedTask] = useState(null);

  const selectTask = (task) => setSelectedTask(task);

  // --- TASKS ---
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // --- GOALS ---
  const [goals, setGoals] = useState(
    JSON.parse(localStorage.getItem("goals")) || []
  );

  // --- HABITS ---
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem("habits")) || []
  );

  // --- QUOTES ---
  const [quotes, setQuotes] = useState([]);

  // -------------------- TASK FUNCTIONS --------------------
  const addTask = (task) => {
    const newTask = { ...task, id: uuidv4(), status: "pending" };
    setTasks([...tasks, newTask]);
  };

  const addTaskAndNavigate = (task, navigate) => {
    addTask(task);
    navigate("/tasks");
  };

  const updateTask = (id, patch) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, ...patch } : t)));

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  // -------------------- GOAL FUNCTIONS --------------------
  const addGoal = (goal) => setGoals([...goals, { ...goal, id: uuidv4() }]);
  const updateGoal = (id, patch) =>
    setGoals(goals.map((g) => (g.id === id ? { ...g, ...patch } : g)));
  const deleteGoal = (id) => setGoals(goals.filter((g) => g.id !== id));

  // -------------------- HABIT FUNCTIONS --------------------
  const addHabit = (habit) =>
    setHabits([...habits, { ...habit, id: uuidv4(), completed: false }]);
  const markHabitComplete = (id) =>
    setHabits(
      habits.map((h) => (h.id === id ? { ...h, completed: !h.completed } : h))
    );
  const deleteHabit = (id) => setHabits(habits.filter((h) => h.id !== id));

  // -------------------- QUOTES --------------------
  useEffect(() => {
    setQuotes([
      "Dream big, work hard.",
      "Consistency is key.",
      "Every day is a new opportunity.",
      "Focus on progress, not perfection.",
      "Small steps lead to big achievements.",
    ]);
  }, []);

  // -------------------- PERSISTENCE --------------------
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,

        tasks,
        addTask,
        addTaskAndNavigate,
        updateTask,
        deleteTask,

        goals,
        addGoal,
        updateGoal,
        deleteGoal,

        habits,
        addHabit,
        markHabitComplete,
        deleteHabit,

        selectedTask,
        selectTask,

        quotes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
