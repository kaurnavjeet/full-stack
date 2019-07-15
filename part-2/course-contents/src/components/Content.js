import React from "react";
import Part from "./Part";

const Content = ({ course }) => {
  const rows = () =>
    course.parts.map(part => <Part key={part.id} part={part} />);

  return rows();
};

export default Content;
