import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <Part
        part={props.parts.part1.name}
        exercise={props.parts.part1.exercises}
      />
      <Part
        part={props.parts.part2.name}
        exercise={props.parts.part2.exercises}
      />
      <Part
        part={props.parts.part3.name}
        exercise={props.parts.part3.exercises}
      />
    </>
  );
};

export default Content;
