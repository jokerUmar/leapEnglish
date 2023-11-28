import React from "react";
import "./limit.css";
import { LimitSlider } from "../LimitSlider/LimitSlider";
import { Button } from "@mantine/core";

function Limit({ setTheme, theme }) {
  return (
    <div
      className="limit"
      style={
        theme
          ? { backgroundColor: "white" }
          : { backgroundColor: "rgb(9, 9, 11)" }
      }
    >
      <div className="container">
        <h1
          className="limit__title"
          style={theme ? { color: "black" } : { color: "white" }}
        >
          Tariflar - 7 ta
        </h1>
        <LimitSlider setTheme={setTheme} theme={theme} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <a
            href="https://t.me/LeapSupport"
            style={{
              textDecoration: "none",
              color: "rgb(34, 139, 230)",
            }}
            target="_blank"
          >
            <Button
              variant="light"
              color="rgb(34, 139, 230)"
              size="lg"
              style={{
                marginBottom: "30px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              radius="md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-writing"
              >
                <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z"></path>
                <path d="M16 7h4"></path>
                <path d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3"></path>
              </svg>
              <span
                style={{
                  marginLeft: "6px",
                  marginRight: "8px",
                  position: "relative",
                  top: "-1px",
                }}
              >
                Kursga yozilish
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-arrow-right"
              >
                <path d="M5 12l14 0"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Limit;
