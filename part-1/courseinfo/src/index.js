import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = props => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Part = props => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  );
};
const Content = props => {
  let partCourse = props.course;
  return (
    <div>
      <Part part={partCourse.parts[0]} />
      <Part part={partCourse.parts[1]} />
      <Part part={partCourse.parts[2]} />
    </div>
  );
};

const Total = props => {
  let total = props.course.parts;
  return (
    <div>
      <p>
        Number of exercises{" "}
        {total[0].exercises + total[1].exercises + total[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
