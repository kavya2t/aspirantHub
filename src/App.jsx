import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// User Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Schedule from "./pages/Schedule";
import Habits from "./pages/Habits";
import Goals from "./pages/Goals";
import Profile from "./pages/Profile";
import Premium from "./pages/Premium";

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ManageUsers from "./pages/ManageUsers";
import ManageContent from "./pages/ManageContent";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AppProvider from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />

          <main className="container my-4 flex-fill">
      
            <Routes>
              {/* User Routes */}
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/habits" element={<Habits />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/premium" element={<Premium />} />

              {/* Admin Routes */}
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/manage-users" element={<ManageUsers />} />
              <Route path="/manage-content" element={<ManageContent />} />
            </Routes>
          </main>  

          <Footer />
        </div>  
      </Router>
    </AppProvider>
  );
}
