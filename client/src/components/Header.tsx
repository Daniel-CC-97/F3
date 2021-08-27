import React from "react";
import { Link } from "react-router-dom";
import "../CSS_Files/Header.css";

export default function Header() {
  return (
    <header>
      <Link to={"/squad"}>
        <div>
          <h1 className="Header_title">F3</h1>
        </div>
      </Link>
    </header>
  );
}
