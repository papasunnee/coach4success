import Carousel from "re-carousel";
import IndicatorDots from "./indicator-dots";
import Buttons from "./buttons";
import "./Slider.scss";

const carouselContent = [
  {
    heading: "Find A Coach, Find Success",
    subtitle: "",
    bgColor: "tomato",
    bgImage: "1"
  },
  { heading: "", subtitle: "", bgColor: "orchid", bgImage: "2" },
  { heading: "", subtitle: "", bgColor: "orange", bgImage: "3" },
  { heading: "", subtitle: "", bgColor: "seaBlue", bgImage: "4" }
];

export default () => {
  return (
    <div className="myCarousel">
      <Carousel loop auto widgets={[IndicatorDots, Buttons]}>
        {carouselContent.map(({ heading, subtitle, bgImage, bgColor }, key) => (
          <div
            key={key}
            style={{
              backgroundImage: `url(/static/images/slider/${bgImage}.jpg)`,
              backgroundColor: `${bgColor}`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div style={{ textAlign: "center", color: "#fff" }}>
              <h1 style={{ color: "#fff" }}> Find A Coach, Find Success</h1>
              <p>Don’t be afraid to take a step in the right direction</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
