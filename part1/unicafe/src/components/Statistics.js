const Statistics = (props) => {
  const { good, neutral, bad } = props.statistics;

  const total = good + neutral + bad;

  const top = 1;
  const medium = 0;
  const low = -1;

  const average = (good * top + neutral * medium + bad * low) / total;

  const positive = (good * 100) / total;

  return (
    <>
      <h2>statistics</h2>

      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {average ? average : 0}</div>
      <div>positive {positive ? positive : 0} %</div>
    </>
  );
};

export default Statistics;
