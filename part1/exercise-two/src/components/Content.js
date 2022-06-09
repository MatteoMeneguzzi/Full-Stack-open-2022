import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <Part part={props.parts.part1} exercise={props.exercises.exercises1} />
      <Part part={props.parts.part2} exercise={props.exercises.exercises2} />
      <Part part={props.parts.part3} exercise={props.exercises.exercises3} />
    </>
  );
};

export default Content;
