const Total = (props) => {
  let { total } = props;

  let value = 0;

  total.forEach((element) => {
    value += parseInt(element.exercises);
  });

  return (
    <>
      <p>Number of exercises {value}</p>
    </>
  );
};

export default Total;
