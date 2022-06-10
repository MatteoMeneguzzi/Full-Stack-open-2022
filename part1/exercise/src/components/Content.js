import Part from "./Part";

const Content = (props) => {
  const { parts } = props;

  const list = parts.map((item, index) => (
    <Part name={item.name} exercises={item.exercises} key={index} />
  ));
  return <>{list}</>;
};

export default Content;
