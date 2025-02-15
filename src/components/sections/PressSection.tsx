import React from "react";
import { PressData } from "../../constants/PressData";

function PressSection() {
  return (
    <div className="section-wrap">
      <div className="sec-top">
        <div className="sec-tit-wrap">
          <h2 className="sec-tit">PRESS</h2>
          <p className="sec-sub-tit">아모레퍼시픽의 소식을 전합니다.</p>
        </div>
        <a href="https://stories.amorepacific.com/midcont" className="more-btn">
          Read More
        </a>
      </div>
      <div className="sec-cont-wrap">
        <ul className="sec-cont-list">
          {PressData.map((PressData, index) => (
            <li>
              <a href={PressData.link} key={index} className="data-item">
                <div className="data-img-wrap">
                  <img
                    src={PressData.image}
                    alt={PressData.title}
                    className="data-image"
                  />
                  <button className="btn">상세보기 +</button>
                </div>
                <div className="data-txt-wrap">
                  <p className="data-date">{PressData.date}</p>
                  <h3 className="data-title">{PressData.title}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PressSection;
