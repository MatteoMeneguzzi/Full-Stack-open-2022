import Part from "./Part";

const Content = ({ parts }) => {
  const total = parts.reduce(
    (previousValue, currentValue) => previousValue + currentValue.exercises,
    0
  );

  const list = parts.map((part) => <Part key={part.id} part={part} />);
  return (
    <>
      {list}
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    </>
  );
};

export default Content;
