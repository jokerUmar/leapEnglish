import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import classes from "./Demo.module.css";
import LimitInfo from "../LImitInfo/LimitInfo";

export function LimitSlider({ setTheme, theme }) {
  return (
    <Carousel
      slideSize="30.333%"
      slideGap="sm"
      align="start"
      slidesToScroll={1}
      classNames={classes}
    >
      <Carousel.Slide className={classes.limitSlider}>
        <LimitInfo
          limit_number_individual={1}
          limit_number_course={8}
          limit_number_price={"450.000"}
          limit_number_time={"20 daqiqa"}
          limit_number_week={2}
          setTheme={setTheme}
          theme={theme}
        />
      </Carousel.Slide>
      <Carousel.Slide className={classes.limitSlider}>
        <LimitInfo
          limit_number_individual={2}
          limit_number_course={8}
          limit_number_price={"600.000"}
          limit_number_time={"30 daqiqa"}
          limit_number_week={2}
          setTheme={setTheme}
          theme={theme}
        />
      </Carousel.Slide>
      <Carousel.Slide className={classes.limitSlider}>
        <LimitInfo
          limit_number_individual={3}
          limit_number_course={8}
          limit_number_price={"1.120.000 "}
          limit_number_time={"1 soat"}
          limit_number_week={2}
          setTheme={setTheme}
          theme={theme}
        />
      </Carousel.Slide>
      <Carousel.Slide className={classes.limitSlider}>
        <LimitInfo
          limit_number_individual={4}
          limit_number_course={12}
          limit_number_price={"1.560.000 "}
          limit_number_time={"1 soat"}
          limit_number_week={3}
          setTheme={setTheme}
          theme={theme}
        />
      </Carousel.Slide>
      <Carousel.Slide className={classes.limitSlider}>
        <LimitInfo
          limit_number_individual={5}
          limit_number_course={12}
          limit_number_price={"2.160.000 "}
          limit_number_time={"1.5 soat"}
          limit_number_week={3}
          setTheme={setTheme}
          theme={theme}
        />
      </Carousel.Slide>
      <Carousel.Slide className={classes.limitSlider}>
        <LimitInfo
          limit_number_individual={6}
          limit_number_course={20}
          limit_number_price={"2.200.000 "}
          limit_number_time={"1 soat"}
          limit_number_week={5}
          setTheme={setTheme}
          theme={theme}
        />
      </Carousel.Slide>
      <Carousel.Slide className={classes.limitSlider}>
        <LimitInfo
          limit_number_individual={7}
          limit_number_course={20}
          limit_number_price={"3.000.000 "}
          limit_number_time={"1.5 soat"}
          limit_number_week={5}
          setTheme={setTheme}
          theme={theme}
        />
      </Carousel.Slide>
    </Carousel>
  );
}
