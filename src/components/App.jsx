import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';



export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

    handleIncrementGood = (event) => {
        this.setState((prevState) => ({
            good: prevState.good + 1,
        }),
        console.log(event));
    };
    handleIncrementNeutral = () => {
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1,
        }));
    };
    handleIncrementBad = () => {
        this.setState((prevState) => ({
            bad: prevState.bad + 1,
        }));
    };

   countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
        
   }
    
    countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
    return 0;
    }
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }


    render() {
      return (

            <div>
                <h1>Please leave feedback</h1>
                <div>
                    <button type="button" onClick={this.handleIncrementGood}>Good</button>
                    <button type="button" onClick={this.handleIncrementNeutral}>Neutral</button>
                    <button type="button" onClick={this.handleIncrementBad}>Bad</button>
          </div>
          <Section title="Statistics">
          {this.countTotalFeedback() !==0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}/>
          ) : (<Notification message="There is no feedback" />)}
        </Section>
          </div>
        );
    }
}
