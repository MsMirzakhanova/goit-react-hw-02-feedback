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
                        <p>Total: <span></span></p>
                    </div>
                </div>
            </div>
        )
    }
}
