import React from "react";
import "./loader.css";
function Loader() {
  return (
    <div className="container spinners-container">
      <div class="spinner-grow text-danger" role="status" />
      <div class="spinner-grow text-danger" role="status" />
      <div class="spinner-grow text-danger" role="status" />
    </div>
  );
}

export default Loader;
