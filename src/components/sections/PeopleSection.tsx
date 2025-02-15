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
    <div className="people-cont">
      <div className="sec-tit-wrap">
        <h2 className="sec-tit">INSPIRATION</h2>
        <p className="sec-sub-tit">
          아모레퍼시픽이 더 아름다운 세상을 위한 영감을 전합니다.
        </p>
      </div>
      <Slider {...settings}>
        {PeopleData.map((PeopleData, index) => (
          <a href={PeopleData.link} key={index} className="people-item">
            <div className="img-wrap">
              <img
                src={PeopleData.image}
                alt={PeopleData.title}
                className="people-image"
              />
              <button className="btn">상세보기 +</button>
            </div>
            <div className="txt-wrap">
              <h3 className="people-title">{PeopleData.title}</h3>
              <p className="people-info">{PeopleData.membersInfo}</p>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
}

export default PeopleSection;
