import React from "react";
import { Wrapper } from "./app_style";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navigation/nav";
import Dashboard from "./components/dashboard/dashboard";
import Preferences from "./components/preferences/preferences";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Wine from "./components/wine/wine";
import useToken from "./components/hooks/useToken";

function App() {
  const { token, setToken } = useToken();

  let ProtectedRoute = ({ token, children }) => {
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Wrapper>
      <BrowserRouter forceRefresh={true}>
        <NavBar token={token} />
        <h1>Application</h1>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/wine" element={<Wine token={token} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute token={token}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/preferences"
            element={
              <ProtectedRoute token={token}>
                <Preferences />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
