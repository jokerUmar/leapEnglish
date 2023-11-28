import React from "react";
import "./hero.css";
import { Button, Overlay } from "@mantine/core";

function Hero({ theme, setTheme }) {
  return (
    <div
      className="hero"
      style={
        theme
          ? { backgroundColor: "white" }
          : { backgroundColor: "rgb(9, 9, 11)" }
      }
    >
      <div className="container">
        <h1
          className="hero_title"
          style={theme ? { color: "black" } : { color: "white" }}
        >
          Ingliz tilini jaydari o'zbek tilida o'rgatamiz
        </h1>
        <p className="hero_text">- Leap English Online Academy</p>
        <article className="hero_btn-box">
          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 100 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-list-check"
              style={{ marginRight: "10px" }}
            >
              <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
              <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
              <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
              <path d="M11 6l9 0"></path>
              <path d="M11 12l9 0"></path>
              <path d="M11 18l9 0"></path>
            </svg>
            Kurslar
          </Button>
          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 100 }}
          >
            Kursga yozilish
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-arrow-right"
              style={{ marginLeft: "10px" }}
            >
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </Button>
        </article>
      </div>
    </div>
  );
}

export default Hero;
