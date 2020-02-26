import React from "react";
import Navbar from "./Navbar";
import "../css/style.css";

const Container = () => {
  return (
    <div>
      <Navbar />
      <h1>Esta es mi aplicación</h1>
      <p>
        Bienvenido a mi nueva aplicación React creada con webpack sin refresh
      </p>
    </div>
  );
};

export default Container;
