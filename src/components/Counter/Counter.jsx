import { Component } from 'react';


export class Counter extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    handleIncrementGood = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1,
        }));
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
                <div>
                    <h1>Statistics</h1>
                    <div>
                        <p>Good: <span>{this.state.good}</span></p>
                        <p>Neutral: <span>{this.state.neutral}</span></p>
                        <p>Bad: <span>{this.state.bad}</span></p>
                        <p>Total: {this.countTotalFeedback()}</p>
                        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
                    </div>
                </div>
            </div>
        )
    }
}
