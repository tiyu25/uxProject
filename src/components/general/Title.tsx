interface TitleProps {
  title: string;
  description: string;
}

const Title: React.FC<TitleProps> = ({ title, description }) => {
  const subDescription = description.split('|');

  return (
    <div className="title">
      <h2>{title}</h2>
      <div className="title-content-box">
        <div className="content">
          {subDescription.map((desc, idx) => (
            // NEWBEAUTY페이지 가운데 정렬하기 까다롭다. 가운데 위치, 왼쪽 정렬. 수동적인 방식으로 해보았다
            <p
              key={idx}
            >
              {desc}
              <br />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Title;
