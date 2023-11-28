import React from "react";
import "./aboutCourse.css";

function AboutCourse({ theme, setTheme }) {
  return (
    <div
      className="about-course"
      style={
        theme
          ? { backgroundColor: "white" }
          : { backgroundColor: "rgb(9, 9, 11)" }
      }
    >
      <div className="about_line"></div>
      <div className="container">
        <h1
          className="about_course_title"
          style={theme ? { color: "black" } : { color: "white" }}
        >
          Kurslarimiz bilan tanishing
        </h1>

        <iframe
          className="youtube_link"
          width="420"
          height="315"
          style={{ border: "none" }}
          src="https://www.youtube.com/embed/FhVUlOvH-P0?si=MVS4DSvM_D5IGX32?rel=0"
        ></iframe>
      </div>
    </div>
  );
}

export default AboutCourse;
