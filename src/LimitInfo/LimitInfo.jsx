import React from "react";
import "./limit-info.css";
function LimitInfo({
  limit_number_individual,
  limit_number_course,
  limit_number_price,
  limit_number_time,
  limit_number_week,
  setTheme = { setTheme },
  theme = { theme },
}) {
  return (
    <div className="limit_info">
      <span className="limit_title">Individual {limit_number_individual}</span>
      <ul className="limit_list">
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Beginner
        </li>
        <li
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
          className="limit_text"
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Elementary
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Pre-Intermediate
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Intermediate
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Haftalik jonli darslar
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Oylik Masterclass
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Speaking Club
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Chat
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Beginner
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Exclusive kontent
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Kitoblar
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Foydali linklar
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Darajani aniqlab berish
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Uyga vazifa
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Vazifalarni tekshirish
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Unit Test
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Unit Testlarni tekshirish
        </li>
        <li
          className="limit_text"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          Mentor
        </li>
        <li
          className="limit_text limit_text_last"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          <span className="limit_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </span>{" "}
          <span className="limit-open_text">Yakkama-yakka dars:</span>
          <article className="limit-open_text_box">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-point"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              </svg>{" "}
              Darslar soni: {limit_number_course} ta
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-point"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              </svg>{" "}
              Haftasiga: {limit_number_week} martta
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-point"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              </svg>{" "}
              Dars davomiyligi: {limit_number_time}
            </p>
          </article>
        </li>
        <li
          className="limit_price"
          style={theme ? { color: "black" } : { color: "rgb(193, 194, 197)" }}
        >
          {limit_number_price} so'm/Oy
        </li>
      </ul>
    </div>
  );
}

export default LimitInfo;
