const Feedbacks = ({ props }) => {
  let { good, bad, neutral, setGood, setNeutral, setBad } = props;
  return (
    <>
      <h2>give feedback</h2>

      <button onClick={() => setGood(good + 1)}>good</button>

      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>

      <button onClick={() => setBad(bad + 1)}>bad</button>
    </>
  );
};

export default Feedbacks;
