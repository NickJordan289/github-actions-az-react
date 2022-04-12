import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registrations from "./Registrations";
import Registration from "./Registration";
import Register from "./Register";

const container = createRoot(document.getElementById("root"));
container.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/registrations" element={<Registrations />}>
          <Route index element={<Register/>}/>
          <Route path=":id" element={<Registration />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <main>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
