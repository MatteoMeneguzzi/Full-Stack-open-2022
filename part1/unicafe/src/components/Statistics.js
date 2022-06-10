import StatisticLine from "./StatisticLine";

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
      {total > 0 ? (
        <>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={total} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text={`positive ${positive} %`} />
        </>
      ) : (
        <div>No feedback given</div>
      )}{" "}
    </>
  );
};

export default Statistics;
