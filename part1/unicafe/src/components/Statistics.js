const Statistics = (props) => {
  const { good, neutral, bad } = props.statistics;
  return (
    <>
      <h2>statistics</h2>

      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
    </>
  );
};

export default Statistics;
