import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-white vh-100 border-end" style={{ minWidth: 220 }}>
      <div className="p-3">
        <h5 className="mb-3">AspirantHub</h5>
        <nav className="nav flex-column">
          <NavLink to="/" className="nav-link">Dashboard</NavLink>
          <NavLink to="/tasks" className="nav-link">Tasks</NavLink>
          <NavLink to="/schedule" className="nav-link">Schedule</NavLink>
          <NavLink to="/habits" className="nav-link">Habits</NavLink>
          <NavLink to="/goals" className="nav-link">Goals</NavLink>
          <NavLink to="/premium" className="nav-link">Premium</NavLink>
          <NavLink to="/profile" className="nav-link">Profile</NavLink>
          <NavLink to="/admin/dashboard" className="nav-link text-danger">Admin</NavLink>
        </nav>
      </div>
    </div>
  );
}
