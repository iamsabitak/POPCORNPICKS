import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@mantine/core";

const Navbar: React.FC = () => {
  return (
    <>
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
        <NavLink
          label="POPCORNPICKS 🍿"
          to="/"
          component={Link}
          style={{
            textDecoration: "none",
            color: "#08e408",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        />
        <ul
          style={{
            listStyle: "none",
            margin: "0",
            padding: "0",
            display: "flex",
          }}
        >
          <li style={{ marginLeft: "15px" }}>
            <NavLink
              label="Home"
              to="/"
              component={Link}
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "17px",
                transition: "color 0.3s ease",
              }}
            />
          </li>
          <li style={{ marginLeft: "15px" }}>
            <NavLink
              label="Movie"
              to="/movie"
              component={Link}
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "17px",
                transition: "color 0.3s ease",
              }}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
