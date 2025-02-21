import React, { useState } from "react";
import { PeopleData } from "../../constants/PeopleData";
import Slider from "react-slick";

function PeopleSection() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="section-wrap wrap-inner">
      <div className="sec-top">
        <div className="sec-tit-wrap">
          <h2 className="sec-tit">INSPIRATION</h2>
          <p className="sec-sub-tit">
            아모레퍼시픽이 더 아름다운 세상을 위한 영감을 전합니다.
          </p>
        </div>
      </div>
      <Slider {...settings}>
        {PeopleData.map((PeopleData) => (
          <a href={PeopleData.link} key={PeopleData.link} className="data-item">
            <div className="data-img-wrap">
              <img
                src={PeopleData.image}
                alt={PeopleData.title}
                className="data-image"
              />
              <button className="btn">상세보기 +</button>
            </div>
            <div className="data-txt-wrap">
              <h3 className="data-title">{PeopleData.title}</h3>
              <p className="data-info">{PeopleData.membersInfo}</p>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
}

export default PeopleSection;
