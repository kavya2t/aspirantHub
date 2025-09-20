import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const { user } = useContext(AppContext);

  return (
    <nav className="navbar bg-light p-3">
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/habits">Habits</Link>
      <Link to="/goals">Goals</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/premium">Premium {user?.premium && <span className="badge bg-warning text-dark ms-2">Premium</span>}</Link>
      {user?.isAdmin && <Link to="/admin" className="text-danger">Admin</Link>}
    </nav>
  );
}
