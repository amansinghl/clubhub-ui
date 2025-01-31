import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import useAuth from "./hooks/UseAuth";
import Login from "./components/Auth/Login";
import AdminDashboard from "./views/AdminDashboard";
import StudentDashboard from "./views/StudentDashboard";
import Profile from "./components/Profile/Profile";
import Club from "./components/Club/Club";
import Event from "./components/Event/Event";
import SignIn from "./components/Auth/SignIn";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Settings from "./components/Profile/settings";
import ClubDetail from "./components/Club/ClubDetail";
import EventDetail from "./components/Event/EventDetail";

const Home = () => {
  const { isAuthenticated, role } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <Navigate
      to={isAuthenticated && role === "admin" ? "/admin" : "/student"}
      replace
    />
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<Settings />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/club" element={<Club />} />
        <Route path="/club/:id" element={<ClubDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
