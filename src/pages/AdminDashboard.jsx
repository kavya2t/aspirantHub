import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <Link to="/manage-users" className="btn btn-primary w-100 p-3">
            Manage Users
          </Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/manage-content" className="btn btn-warning w-100 p-3">
            Manage Content
          </Link>
        </div>
        <div className="col-md-4 mb-3">
          <button className="btn btn-success w-100 p-3">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
