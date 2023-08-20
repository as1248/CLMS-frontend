import styled from "styled-components";
import Slider from "react-slick";
import Image4 from "../img/IMAGE4.png";
import Image5 from "../img/IMAGE5.png";

const Slide = () => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows: false,
  };
  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <SlideImage src={Image4} alt="광고4" />
        </div>
        <div>
          <SlideImage src={Image5} alt="광고5" />
        </div>
      </Slider>
    </SliderWrapper>
  );
};
export default Slide;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
`;

const SliderWrapper = styled.div`
  width: 100%;
`;
