import React, { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  type: "amorePick" | "now" | "both"; // 아이템이 속할 탭
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  category,
  link,
}) => {
  return (
    <li>
      <a href={link}>
        <div className="cont-media">
          <p>
            <span>{category}</span>
          </p>
          <img src={image} alt={title} />
        </div>
        <div className="tab-cont-tit">
          <span className="beauty-tit">{title}</span>
          <span className="beauty-sub-tit">{description}</span>
        </div>
      </a>
    </li>
  );
};

const AmorePick: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"amorePick" | "now">("amorePick");

  const items: CardProps[] = [
    {
      title: "설화수, 노스텔지어와 함께 한국가구 전시 진행",
      description: "Beauty Trends 2025",
      image:
        "https://stories.amorepacific.com/wp-content/uploads/2025/02/THUM-1024X1024-0724_ed579c.jpg",
      category: "TREND",
      link: "https://stories.amorepacific.com/%ec%95%84%eb%aa%a8%eb%a0%88%ed%8d%bc%ec%8b%9c%ed%94%bd-%ec%84%a4%ed%99%94%ec%88%98-%eb%85%b8%ec%8a%a4%ed%85%94%ec%a7%80%ec%96%b4%ec%99%80-%ed%95%a8%ea%bb%98-%ed%95%9c%ea%b5%ad-%ea%b3%a0%ea%b0%80/",
      type: "now",
    },
    {
      title: "아모레퍼시픽, 뷰티와 테크의 연결로 CES 2025를 사로잡다",
      description: "Behind Talk",
      image:
        "https://stories.amorepacific.com/wp-content/uploads/2025/02/AS-250211_BT-THUM_1024X1024.jpg",
      category: "INSPIRE",
      link: "https://stories.amorepacific.com/%ec%95%84%eb%aa%a8%eb%a0%88%ed%8d%bc%ec%8b%9c%ed%94%bd-%eb%b7%b0%ed%8b%b0%ec%99%80-%ed%85%8c%ed%81%ac%ec%9d%98-%ec%97%b0%ea%b2%b0%eb%a1%9c-ces-2025%eb%a5%bc-%ec%82%ac%eb%a1%9c%ec%9e%a1%eb%8b%a4/",
      type: "both",
    },
    {
      title: "정세랑 작가의 뉴뷰티를 만나다",
      description: "NEW BEAUTY ICON",
      image:
        "https://stories.amorepacific.com/wp-content/uploads/2025/02/AS-250213_NI-THUM_1024X1024.jpg",
      category: "INSPIRE",
      link: "%ec%95%84%eb%aa%a8%eb%a0%88%ed%8d%bc%ec%8b%9c%ed%94%bd-%ec%a0%95%ec%84%b8%eb%9e%91-%ec%9e%91%ea%b0%80%ec%9d%98-%eb%89%b4%eb%b7%b0%ed%8b%b0%eb%a5%bc-%eb%a7%8c%eb%82%98%eb%8b%a4",
      type: "both",
    },
    {
      title: "헤라 시그니아 일루미네이팅 세럼 디자인 스토리",
      description: "Creative Story",
      image:
        "https://stories.amorepacific.com/wp-content/uploads/2025/02/HERA-Signa-Serum1024.png",
      category: "HERITAGE",
      link: "%ec%95%84%eb%aa%a8%eb%a0%88%ed%8d%bc%ec%8b%9c%ed%94%bd-%ed%97%a4%eb%9d%bc-%ec%8b%9c%ea%b7%b8%eb%8b%88%ec%95%84-%ec%9d%bc%eb%a3%a8%eb%af%b8%eb%84%a4%ec%9d%b4%ed%8c%85-%ec%84%b8%eb%9f%bc-%eb%94%94",
      type: "both",
    },
    {
      title: "신뢰와 진정성? 우리의 핵심이죠!",
      description: "태평양에서 아모레까지",
      image:
        "https://stories.amorepacific.com/wp-content/uploads/2025/01/AS-250203-TA_THUM1024X1024.jpg",
      category: "HERITAGE",
      link: "%ec%95%84%eb%aa%a8%eb%a0%88%ed%8d%bc%ec%8b%9c%ed%94%bd-%ec%8b%a0%eb%a2%b0%ec%99%80-%ec%a7%84%ec%a0%95%ec%84%b1-%ec%9a%b0%eb%a6%ac%ec%9d%98-%ed%95%b5%ec%8b%ac%ec%9d%b4%ec%a3%a0",
      type: "amorePick",
    },
  ];

  const filteredItems = items.filter(
    (item) => item.type === activeTab || item.type === "both"
  );

  return (
    <div className="main-tab">
      <div className="tab-btns">
        <button
          onClick={() => setActiveTab("amorePick")}
          style={{
            color: activeTab === "amorePick" ? "#000" : "#999",
          }}
        >
          AMORE PICK
        </button>
        <button
          onClick={() => setActiveTab("now")}
          style={{
            color: activeTab === "now" ? "#000" : "#999",
          }}
        >
          NOW
        </button>
      </div>
      <div className="tab-cont">
        <ul>
          {filteredItems.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AmorePick;
