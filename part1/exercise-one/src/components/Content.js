const Content = (props) => {
  return (
    <>
      <p>
        {props.parts.part1} {props.exercises.exercises1}
      </p>
      <p>
        {props.parts.part2} {props.exercises.exercises2}
      </p>
      <p>
        {props.parts.part3} {props.exercises.exercises3}
      </p>
    </>
  );
};

export default Content;
