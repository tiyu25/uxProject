import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // 자동 재생 활성화
    autoplaySpeed: 3000, // 슬라이드 간 간격 (밀리초 단위, 3초)
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <a href="https://stories.amorepacific.com/%EC%95%84%EB%AA%A8%EB%A0%88%ED%8D%BC%EC%8B%9C%ED%94%BD-25%EB%85%84-2%EC%9B%94%EC%9D%98-%EB%A9%94%EC%9D%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80/">
            <img src="https://stories.amorepacific.com/wp-content/themes/elipsa/assets/images/main_left_slide/en/pc/quote_image_Feb_25_1.jpg"></img>
          </a>
        </div>
        <div>
          <a href="https://stories.amorepacific.com/%EC%95%84%EB%AA%A8%EB%A0%88%ED%8D%BC%EC%8B%9C%ED%94%BD-25%EB%85%84-2%EC%9B%94%EC%9D%98-%EB%A9%94%EC%9D%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80/">
            <img src="https://stories.amorepacific.com/wp-content/themes/elipsa/assets/images/main_left_slide/en/pc/quote_image_Feb_25_2.jpg"></img>
          </a>
        </div>
        <div>
          <a href="https://stories.amorepacific.com/%EC%95%84%EB%AA%A8%EB%A0%88%ED%8D%BC%EC%8B%9C%ED%94%BD-25%EB%85%84-2%EC%9B%94%EC%9D%98-%EB%A9%94%EC%9D%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80/">
            <img src="https://stories.amorepacific.com/wp-content/themes/elipsa/assets/images/main_left_slide/en/pc/quote_image_Feb_25_3.jpg"></img>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
