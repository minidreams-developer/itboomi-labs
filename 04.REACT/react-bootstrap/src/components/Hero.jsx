import Carousel from "react-bootstrap/Carousel";
import image_1 from "../assets/slide-1.jpg";
import image_2 from "../assets/slide-2.jpg";
import image_3 from "../assets/slide-3.jpg";

const Hero = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          {/* <image_1 text="First slide" /> */}
          <img src={image_1} alt="" width={1800} height={1000} />
          <Carousel.Caption>
            {console.log("hello")}
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <image_2 text="Second slide" /> */}
          <img src={image_2} alt="" width={1800} height={1000} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <image_3 text="Third slide" /> */}
          <img src={image_3} alt="" width={1800} height={1000} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Hero;
