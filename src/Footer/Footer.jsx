import { Button } from "@mantine/core";
import React from "react";
import "./Footer.css";
function Footer({ setTheme, theme }) {
  return (
    <div
      className="footer"
      style={
        theme
          ? { backgroundColor: "white" }
          : { backgroundColor: "rgb(9, 9, 11)" }
      }
    >
      <div className="container">
        <p
          style={
            ({ border: "none" },
            theme
              ? { backgroundColor: "white", color: "black" }
              : {
                  backgroundColor: "rgb(9, 9, 11)",
                  color: "white",
                })
          }
        >
          © Leap English 2023
        </p>
        <article className="right_footer_icon">
          <a
            className="footer_link"
            href="https://t.me/LeapEnglish"
            target="_blank"
          >
            <Button
              variant="default"
              color="gray"
              size="compact-xs"
              radius="xs"
              style={
                ({ border: "none" },
                theme
                  ? { backgroundColor: "white", color: "black", border: "none" }
                  : {
                      backgroundColor: "rgb(9, 9, 11)",
                      color: "white",
                      border: "none",
                    })
              }
            >
              <svg
                href="https://t.me/LeapEnglish"
                xmlns="http://www.w3.org/2000/svg"
                width="1.4rem"
                height="1.4rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-brand-telegram"
              >
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
              </svg>
            </Button>
          </a>
          <a
            className="footer_link"
            href="https://www.youtube.com/@LeapEnglish"
            target="_blank"
          >
            <Button
              style={
                ({ border: "none" },
                theme
                  ? { backgroundColor: "white", color: "black", border: "none" }
                  : {
                      backgroundColor: "rgb(9, 9, 11)",
                      color: "white",
                      border: "none",
                    })
              }
              variant="default"
              color="gray"
              size="compact-xs"
              radius="xs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4rem"
                height="1.4rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-brand-youtube"
              >
                <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
                <path d="M10 9l5 3l-5 3z"></path>
              </svg>
            </Button>
          </a>

          <a
            className="footer_link"
            href="https://www.instagram.com/leapenglish/"
            target="_blank"
          >
            <Button
              style={
                ({ border: "none" },
                theme
                  ? { backgroundColor: "white", color: "black", border: "none" }
                  : {
                      backgroundColor: "rgb(9, 9, 11)",
                      color: "white",
                      border: "none",
                    })
              }
              variant="default"
              color="gray"
              size="compact-xs"
              radius="xs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4rem"
                height="1.4rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-brand-instagram"
              >
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M16.5 7.5l0 .01"></path>
              </svg>
            </Button>
          </a>
        </article>
      </div>
    </div>
  );
}

export default Footer;
