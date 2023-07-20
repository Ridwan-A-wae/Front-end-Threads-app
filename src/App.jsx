import { useState } from "react";
import "./App.css";
import Headder from "./components/Headder";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Headder />
      <Profile />
      <Navbar />
    </div>
  );
}

export default App;
