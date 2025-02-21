interface TitleProps {
  title: string;
  description: string;
}

const Title: React.FC<TitleProps> = ({ title, description }) => {
  const subDescription = description.split('|');

  return (
    <div className="title">
      <h2>{title}</h2>
      {subDescription.map((desc, idx) => (
        // NEWBEAUTY페이지 가운데 정렬하기 까다롭다. 가운데 위치, 왼쪽 정렬. 수동적인 방식으로 해보았다
        <p
          key={idx}
          style={{
            top: title === 'NEW BEAUTY' ? `${idx * 40 + 40}px` : 'auto',
            width: title === 'NEW BEAUTY' ? 'calc(100% / 2.25)' : 'auto',
          }}
        >
          {desc}
          <br />
        </p>
      ))}
    </div>
  );
};

export default Title;
