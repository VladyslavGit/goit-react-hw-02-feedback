import React from "react";
import FeedbackOption from "../feedbackOptions/FeedbackOptions";

const Statistic = ({
  positivePercentage,
  good,
  neutral,
  bad,
  total,
  handleIncrement
}) => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <FeedbackOption handleIncrement={handleIncrement} />
      <h2>Statistic</h2>
      {positivePercentage ? (
        <>
          <p>Good {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
          <p>Total {total}</p>
          <p>Positive feedback {positivePercentage}%</p>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default Statistic;
