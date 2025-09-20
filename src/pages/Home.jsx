import React from "react";
import QuoteCard from "../components/QuoteCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2 className="text-center mb-4">Welcome to AspirantHub</h2>

      <QuoteCard
        quote="The secret of getting ahead is getting started."
        author="Mark Twain"
      />

      <div className="row text-center mt-4">
        <div className="col-md-4 mb-3">
          <Link to="/tasks" className="btn btn-success w-100 p-3">
            Tasks & To-Do
          </Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/goals" className="btn btn-warning w-100 p-3">
            Set Goals
          </Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/habits" className="btn btn-info w-100 p-3 text-white">
            Habits Tracker
          </Link>
        </div>
      </div>
    </div>
  );
}
