import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Threads from "./components/Threads";
import Replies from "./components/Replies";

function MyRoute() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "27%" }}></div>
        <div style={{ width: "40%" }}>
          <BrowserRouter>
            <App  />
            <Routes>
              <Route path="/" element={<Threads />} />
              <Route path="/replies" element={<Replies />} />
            </Routes>
          </BrowserRouter>
        </div>
        <div style={{ width: "27%" }}>
          <div style={{display:"flex",position:"fixed",marginTop:"25rem",marginLeft:"13rem"}}>
            <img style={{width:"200px"}} src="https://i.imgur.com/wE3f6Kb.png" alt="QR" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyRoute;
