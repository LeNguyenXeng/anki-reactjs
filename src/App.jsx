import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Blogs from "./Pages/Blogs";
import Privacy from "./Pages/Privacy";
import Service from "./Pages/Service";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  // Theo dõi thay đổi của token
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    // Lắng nghe sự kiện storage (khi localStorage thay đổi)
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Protected Route */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/service" element={<Service />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
