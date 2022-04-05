import { Wrapper } from "./app_style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./components/dashboard/dashboard";
import Preferences from "./components/preferences/preferences";
import Login from "./components/login/login";
import useToken from "./components/hooks/useToken"

const url = "http://localhost:3300/api";



function App() {
  
  const { token, setToken } = useToken();
 
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Wrapper>
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
