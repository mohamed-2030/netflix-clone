import React from "react";
import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Rgeister from "./pages/register/Rgeister";
import Watch from "./pages/watch/Watch";

const App = () => {
  return (
    <div className="app">
      <Home />
    </div>
  );
};

export default App;
