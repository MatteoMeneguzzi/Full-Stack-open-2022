import Button from "./Button";

const Feedbacks = ({ props }) => {
  let { good, bad, neutral, setGood, setNeutral, setBad } = props;
  return (
    <>
      <h2>give feedback</h2>

      <Button value={good} method={setGood} text='good' />
      <Button value={neutral} method={setNeutral} text='neutral' />
      <Button value={bad} method={setBad} text='bad' />
    </>
  );
};

export default Feedbacks;
