import React from "react";
import styles from "./FeedbackOptions.module.css";

function FeedbackOption({ handleIncrement }) {
  return (
    <>
      <button
        className={styles.button}
        type="button"
        name="good"
        onClick={e => handleIncrement(e.target.name)}
      >
        Good
      </button>
      <button
        className={styles.button}
        type="button"
        name="neutral"
        onClick={e => handleIncrement(e.target.name)}
      >
        Neutral
      </button>
      <button
        className={styles.button}
        type="button"
        name="bad"
        onClick={e => handleIncrement(e.target.name)}
      >
        Bad
      </button>
    </>
  );
}

export default FeedbackOption;
