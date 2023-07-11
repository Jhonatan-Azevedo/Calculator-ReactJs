import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Calculator from "./main/Calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>Calculator</h1>
    <Calculator />
    <br />
    <a
      className="linkRedes"
      href="https://www.linkedin.com/in/jazevedodev/"
      target="_blank"
    >
      Jhonatan Azevedo <i class="bi bi-linkedin"></i>
    </a>
  </>
);
