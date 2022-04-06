import React from "react";
import { Wrapper } from "./app_style";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navigation/nav";
import Dashboard from "./components/dashboard/dashboard";
import Preferences from "./components/preferences/preferences";
import Home from "./components/home/home";
import Login from "./components/login/login";
import useToken from "./components/hooks/useToken";

const url = "http://localhost:3300/api";

function App() {
  const { token, setToken } = useToken();

  // let checkToken = () => {
  //   if (!token) {
  //     return <Login setToken={setToken} />;
  //   }
  // };

  let ProtectedRoute = () => {
    if (!token) {
      return <Navigate to="/login" />;
    }
  };

  return (
    <Wrapper>
      <BrowserRouter forceRefresh={true}>
        <NavBar />
        <h1>Application</h1>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="login" element={<Login />} setToken={setToken}/>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/preferences"
            element={
              <ProtectedRoute>
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
