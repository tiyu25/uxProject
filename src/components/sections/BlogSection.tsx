import React, { useState } from "react";
import { BlogData } from "../../constants/BlogData";

function BlogSection() {
  return (
    <div className="section-wrap wrap-inner">
      <div className="sec-top">
        <div className="sec-tit-wrap">
          <h2 className="sec-tit">LESS PLASTIC</h2>
          <p className="sec-sub-tit">
            #LESS PLASTIC. WE ARE FANTASTIC! 관련된 콘텐츠들을 함께 만나보세요.
          </p>
        </div>
        <a href="https://stories.amorepacific.com/midcont" className="more-btn">
          Read More
        </a>
      </div>
      <div className="sec-cont-wrap">
        <ul className="sec-cont-list">
          {BlogData.map((BlogData) => (
            <li key={BlogData.link}>
              <a href={BlogData.link} className="data-item">
                <div className="data-img-wrap">
                  <img
                    src={BlogData.image}
                    alt={BlogData.title}
                    className="data-image"
                  />
                </div>
                <div className="data-txt-wrap">
                  <h3 className="data-title">{BlogData.title}</h3>
                  <p className="data-info">{BlogData.category}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogSection;
