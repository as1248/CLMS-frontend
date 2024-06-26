import styled from "styled-components";
import Slider from "react-slick";
import Image5 from "../../img/IMAGE5.png";

const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };
  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <SlideImage src={Image5} alt="광고" />
        </div>
      </Slider>
    </SliderWrapper>
  );
};
export default Slide;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  min-width: 1200px;
`;

const SliderWrapper = styled.div`
  width: 100%;
`;
