import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import "@mantine/core/styles.css";
import { MantineProvider, Overlay } from "@mantine/core";
import AboutCourse from "./AboutCourse/AboutCourse";
import Limit from "./Limit/Limit";
import Footer from "./Footer/Footer";
function App() {
  const [bars, setBars] = useState(false);
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    console.log(JSON.parse(localStorage.getItem("theme")));
  }, [theme]);

  return (
    <>
      <MantineProvider>
        <Header
          setTheme={setTheme}
          theme={theme}
          bars={bars}
          setBars={setBars}
        />
        <Hero setTheme={setTheme} theme={theme} />
        <AboutCourse setTheme={setTheme} theme={theme} />
        <Limit setTheme={setTheme} theme={theme} />
        <Footer setTheme={setTheme} theme={theme} />

        {bars && (
          <Overlay color="#000" backgroundOpacity={0.35} blur={4} zIndex={1} />
        )}
      </MantineProvider>
    </>
  );
}

export default App;
