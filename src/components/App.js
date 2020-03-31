import React, { Component } from "react";
import Statistic from "./statistic/Statistic";
import styles from "./App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  handleIncrement = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      ((this.state.good + this.state.neutral) * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };
  render() {
    return (
      <div className={styles.mainBox}>
        <Statistic
          {...this.state}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          handleIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default App;
