interface TitleProps{
  title:string;
  description: string;
}

const Title: React.FC<TitleProps> = ({title, description}) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Title;
