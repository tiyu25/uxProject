import React, { useState } from "react";
import { programs } from "../../constants/PeopleData";
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
      <h2>INSPIRATION</h2>
      <Slider {...settings}>
        {programs.map((program, index) => (
          <a href={program.link} key={index} className="people-item">
            <div className="img-wrap">
              <img
                src={program.image}
                alt={program.title}
                className="people-image"
              />
              <button className="btn">상세보기 +</button>
            </div>
            <div className="txt-wrap">
              <h3 className="people-title">{program.title}</h3>
              <p className="people-info">{program.membersInfo}</p>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
}

export default PeopleSection;
