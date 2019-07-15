import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => {
  return (
    <>
      <button onClick={props.handleButton}>{props.text}</button>
    </>
  );
};

const MaxVotes = ({ votes, anecdotes }) => {
  let maxVote = Math.max(...votes);
  let index = votes.indexOf(maxVote);
  if (maxVote > 0) {
    return (
      <>
        <p>{anecdotes[index]}</p>
        <p>has {votes[index]} votes</p>
      </>
    );
  } else {
    return <p>No anecdote has votes.</p>;
  }
};

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleClick = () => {
    let length = anecdotes.length;
    setSelected(Math.floor(Math.random() * length + 1));
  };

  const handleVote = selected => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
  };

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button
        handleButton={() => {
          handleVote(selected);
        }}
        text="Vote"
      />
      <Button handleButton={handleClick} text="Next Anecdote" />
      <h3>Anecdote with most votes</h3>
      <MaxVotes votes={votes} anecdotes={anecdotes} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
