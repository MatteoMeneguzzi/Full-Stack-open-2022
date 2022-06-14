import Part from "./Part";

const Content = ({ parts }) => {
  console.log(parts);
  const list = parts.map((part) => <Part key={part.id} part={part} />);
  return <>{list}</>;
};

export default Content;
