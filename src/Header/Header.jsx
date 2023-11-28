import React, { useRef } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Burger, Overlay } from "@mantine/core";

function Header({ setBars, bars, theme, setTheme }) {
  let navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("open-nav");
    setBars(!bars);
  };

  return (
    <div
      className="header"
      style={
        theme
          ? { backgroundColor: "white" }
          : { backgroundColor: "rgb(9, 9, 11)" }
      }
    >
      <div className="container">
        <h1
          className="header_logo"
          style={theme ? { color: "black" } : { color: "white" }}
        >
          Leap English
        </h1>
        <nav
          style={
            theme
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: "rgb(9, 9, 11)", color: "white" }
          }
          ref={navRef}
          className="nav"
        >
          <div className="xmark_box">
            <FontAwesomeIcon
              className="nav_xmark"
              onClick={showNavbar}
              icon={faXmark}
            />
          </div>
          <ul
            style={theme ? { color: "black" } : { color: "white" }}
            className="nav_list"
          >
            <li className="nav_list-item">
              <a
                style={theme ? { color: "black" } : { color: "white" }}
                href="#"
              >
                Asosiy
              </a>
            </li>
            <li className="nav_list-item">
              <a
                style={theme ? { color: "black" } : { color: "white" }}
                href="#"
              >
                Kurslar
              </a>
            </li>
            <li className="nav_list-item">
              <a
                style={theme ? { color: "black" } : { color: "white" }}
                href="#"
              >
                Fikrlar
              </a>
            </li>
            <li className="nav_list-item nav_list-item_line">
              <a
                style={theme ? { color: "black" } : { color: "white" }}
                href="#"
              >
                Bog'lanish
              </a>
            </li>
          </ul>

          <div className="right_header right_header_res">
            <div className="right_header-box">
              <article className="right_header_links_res">
                <a
                  href="https://t.me/LeapEnglish"
                  target="_blank"
                  className="right_header-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.7rem"
                    height="2.7rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-telegram right_header-icon"
                    style={theme ? { color: "black" } : { color: "white" }}
                  >
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@LeapEnglish"
                  target="_blank"
                  className="right_header-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.7rem"
                    height="2.7rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-youtube right_header-icon"
                    style={theme ? { color: "black" } : { color: "white" }}
                  >
                    <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
                    <path d="M10 9l5 3l-5 3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/leapenglish"
                  target="_blank"
                  className="right_header-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.7rem"
                    height="2.7rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-instagram right_header-icon"
                    style={theme ? { color: "black" } : { color: "white" }}
                  >
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M16.5 7.5l0 .01"></path>
                  </svg>
                </a>
              </article>
            </div>
            <span
              className="vertical_line"
              style={
                !theme
                  ? { border: "solid 0.5px white" }
                  : { border: "solid 0.5px rgba(0, 0, 0, 0.3)" }
              }
            ></span>

            {theme ? (
              <span
                className="right_header-icon"
                onClick={() => setTheme(!theme)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4rem"
                  height="1.4rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-moon-stars"
                >
                  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                  <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
                  <path d="M19 11h2m-1 -1v2"></path>
                </svg>
              </span>
            ) : (
              <button
                style={{
                  border: "none",
                  marginLeft: "0px",
                  position: "relative",
                  top: "2px",
                  backgroundColor: "rgb(9, 9, 11)",
                }}
                onClick={() => setTheme(!theme)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4rem"
                  height="1.4rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-sun"
                >
                  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                </svg>
              </button>
            )}
          </div>
        </nav>

        <div className="right_header">
          <div className="right_header-box">
            <article className="right_header_links">
              <a
                href="https://t.me/LeapEnglish"
                target="_blank"
                className="right_header-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.3rem"
                  height="2.3rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-brand-telegram right_header-icon"
                  style={theme ? { color: "black" } : { color: "white" }}
                >
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@LeapEnglish"
                target="_blank"
                className="right_header-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.3rem"
                  height="2.3rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-brand-youtube right_header-icon"
                  style={theme ? { color: "black" } : { color: "white" }}
                >
                  <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
                  <path d="M10 9l5 3l-5 3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/leapenglish/"
                target="_blank"
                className="right_header-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.3rem"
                  height="2.3rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-brand-instagram right_header-icon"
                  style={theme ? { color: "black" } : { color: "white" }}
                >
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M16.5 7.5l0 .01"></path>
                </svg>
              </a>
            </article>

            <FontAwesomeIcon
              className="nav_bars"
              onClick={showNavbar}
              icon={faBars}
              style={!theme ? { color: "white" } : { color: "rgb(9, 9, 11)" }}
            />
          </div>
          <span className="vertical_line"></span>
          {theme ? (
            <button
              style={{
                backgroundColor: "white",
                border: "none",
                marginLeft: "10px",
                position: "relative",
                top: "2px",
              }}
              onClick={() => setTheme(!theme)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4rem"
                height="1.4rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-moon-stars"
              >
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
                <path d="M19 11h2m-1 -1v2"></path>
              </svg>
            </button>
          ) : (
            <button
              style={{
                border: "none",
                marginLeft: "10px",
                position: "relative",
                top: "2px",
                backgroundColor: "rgb(9, 9, 11)",
              }}
              onClick={() => setTheme(!theme)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4rem"
                height="1.4rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-sun"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
      {bars && (
        <Overlay color="#000" backgroundOpacity={0.35} blur={4} zIndex={0} />
      )}
    </div>
  );
}

export default Header;
