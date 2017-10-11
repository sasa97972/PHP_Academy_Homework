import React, {Component} from 'react';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            seconds: 0,
            minutes: 0,
            hours: 0,
            start: false,
        });
        this.timer = this.timer.bind(this);
    }

    timer() {
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;
        let hours = this.state.hours;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
        this.setState({seconds: seconds, minutes: minutes, hours: hours});
    }

    getStart() {
        this.setState({start: true});
        this.tickTimer = setInterval(this.timer, 1000);
    }

    getPause() {
        clearInterval(this.tickTimer);
        this.setState({start: false});
    }

    getStop() {
        clearInterval(this.tickTimer);
        this.setState({start: false, seconds: 0, minutes: 0, hours: 0})
    }

    render() {
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;
        let hours = this.state.hours;
        seconds < 10 ? seconds = "0" + seconds : seconds;
        minutes < 10 ? minutes = "0" + minutes : minutes;
        hours < 10 ? hours = "0" + hours : hours;
        return (
            <div className="timer">
                <h1 className="timer__title">Timer</h1>
                <span className="timer__container">
                    <span className="timer__item">{hours}</span>:
                    <span className="timer__item">{minutes}</span>:
                    <span className="timer__item">{seconds}</span>
                </span>
                {this.state.start === true
                    ? <button className="timer__btn" onClick={() => this.getPause()}>Pause</button>
                    : <button className="timer__btn" onClick={() => this.getStart()}>Start</button>}
                <button className="timer__btn" onClick={() => this.getStop()}>Stop</button>
            </div>
        );
    }

}