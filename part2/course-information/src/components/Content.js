import Part from "./Part";

const Content = ({ parts }) => {
  let total = 0;

  parts.forEach((element) => {
    total += element.exercises;
  });

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
