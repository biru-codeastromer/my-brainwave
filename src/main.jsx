import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import SignIn from "./components/SignIn.jsx";
import NewAccount from "./components/NewAccount.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/newaccount" element={<NewAccount />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
