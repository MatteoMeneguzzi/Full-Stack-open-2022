import { useState } from "react";
import Feedbacks from "./components/Feedbacks";
import Statistics from "./components/Statistics";

const App = () => {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);

  return (
    <>
      <Feedbacks props={{ good, neutral, bad, setGood, setNeutral, setBad }} />
      <Statistics statistics={{ good: good, neutral: neutral, bad: bad }} />
    </>
  );
};

export default App;
