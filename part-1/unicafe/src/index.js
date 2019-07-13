import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = props => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
);

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  const all = good + neutral + bad;

  const average = (good - bad) / all;

  const positive = (good / all) * 100;

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h2>Statistics</h2>
      {all !== 0 ? (
        <table>
          <tbody>
            <Statistics text="good" value={good} />
            <Statistics text="neutral" value={neutral} />
            <Statistics text="bad" value={bad} />
            <Statistics text="all" value={all} />
            <Statistics text="average" value={average} />
            <Statistics text="positive" value={positive} />
          </tbody>
        </table>
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
