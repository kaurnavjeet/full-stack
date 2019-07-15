import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  const courses = () =>
    course.map(x => (
      <div key={x.id}>
        <Header course={x} />
        <Content course={x} />
        <Total course={x} />
      </div>
    ));
  return courses();
};

export default Course;
