import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        backgroundColor: "#151313",
        padding: "0px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "4rem",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#08e408",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        POPCORNPICKS 🍿
      </Link>
      <Search/>
    </nav>
  );
};

export default Navbar;
