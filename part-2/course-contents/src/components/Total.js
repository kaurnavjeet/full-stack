import React from "react";

const Total = ({ course }) => {
  const total = course.parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  return (
    <div>
      <p>Total exercises {total}</p>
    </div>
  );
};

export default Total;
