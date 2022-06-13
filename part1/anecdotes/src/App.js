import { logDOM } from "@testing-library/react";
import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  let [points, setPoints] = useState(
    new Array(7 + 1).join("0").split("").map(parseFloat)
  );

  const generateRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const nextAnecdote = () => {
    let random = generateRandom(0, anecdotes.length);
    setSelected(random);
  };

  let copy = [...points];

  const vote = () => {
    copy[selected]++;
    setPoints(copy);
  };

  const maxValue = (arr) => {
    let max = arr[0];

    for (let val of arr) {
      if (val > max) {
        max = val;
      }
    }
    return max;
  };

  const findTopAnecdote = (element) => element === maxValue(points);

  const topAnecdote = points.findIndex(findTopAnecdote);

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>

      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      {anecdotes[topAnecdote]}
      <div>has {maxValue(points)} votes</div>
    </>
  );
};

export default App;
