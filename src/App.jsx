// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider, useAppContext } from "./context/AppContext";
import Navbar from "./components/Navbar";
import TaskDetail from "./pages/TaskDetail";
import GoalDetail from "./pages/GoalDetail";
import HabitDetail from "./pages/HabitDetail";
import Premium from "./pages/Premium";
import TaskDetails from "./pages/TaskDetail";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Schedule from "./pages/Schedule";
import Habits from "./pages/Habits";
import Goals from "./pages/Goals";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

// PrivateRoute component
function PrivateRoute({ children }) {
  const { user } = useAppContext();
  return user ? children : <Navigate to="/login" />;
}

// AdminRoute component
function AdminRoute({ children }) {
  const { user } = useAppContext();
  return user?.role === "admin" ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tasks/:id" element={<TaskDetail/>}/>
          <Route path="/goals/:id" element={<GoalDetail />} />
          <Route path="/habits/:id" element={<HabitDetail />} />
          <Route path="/premium" element={<Premium/>} />
          <Route path="/task-details" element={<TaskDetails />} />
          
          {/* Private routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute>
                <Tasks />
              </PrivateRoute>
            }
          />
          <Route
            path="/schedule"
            element={
              <PrivateRoute>
                <Schedule />
              </PrivateRoute>
            }
          />
          <Route
            path="/habits"
            element={
              <PrivateRoute>
                <Habits />
              </PrivateRoute>
            }
          />
          <Route
            path="/goals"
            element={
              <PrivateRoute>
                <Goals />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          {/* Admin-only route */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

