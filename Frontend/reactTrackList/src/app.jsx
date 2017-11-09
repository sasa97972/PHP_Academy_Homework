import React, {Component} from 'react';
import { connect } from 'react-redux';

import css from "./app.css"

class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            error: "",
        };
        this.DeleteTrack = this.DeleteTrack.bind(this);
    }

    handleInput(v) {
        this.setState({
            input: v.target.value,
        });
        v.target.value && this.setState({error: ""});
    }

    AddTrack() {
        if(!this.state.input) {
            return this.setState({
                error: "Input must not be empty!"
            })
        }
        if (this.props.list.indexOf(this.state.input) !== -1) {
            if(!confirm("You've already have this track, do you want add this task again?")) {
                return;
            }
        }

        this.props.onClickAddTrack(this.state.input);
        this.setState({input: ""});
    }

    DeleteTrack(index) {
        if(confirm("Are you sure ?")) {
            this.props.onClickDeleteTrack(index);
        }
    }

    render() {
        return (
            <TaskList
                AddTrack={e => this.AddTrack(e)}
                list={this.props.list}
                ChangeInput={e => this.handleInput(e)}
                error={this.state.error}
                inputValue={this.state.input}
                DeleteTrack={this.DeleteTrack}
            />
        );
    }
}

const TaskList = props => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 track__content">
                    <h1 className="track__header">Track list</h1>
                    <input
                        className="track__input"
                        type="text"
                        value={props.inputValue}
                        onChange={v => props.ChangeInput(v)}
                    />
                    <button
                        className="track__submit"
                        onClick={() =>  {
                            props.AddTrack()}
                        }>
                        Add track
                    </button>
                    <p className="track__error">{props.error}</p>
                    <ul className="list-unstyled">
                        {props.list.map((track, i) => (
                                <li key={i} className="track__item">
                                    {track}
                                    <button
                                        className="track__delete"
                                        onClick={() => {props.DeleteTrack(i)}}>
                                        X
                                    </button>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({ list: state });

const mapDispatchToProps = dispatch => ({
    onClickAddTrack: (newItem) => dispatch({
        type: "ADD_TRACK",
        payload: newItem,
    }),
    onClickDeleteTrack: (index) => dispatch({
        type: "DELETE_TRACK",
        payload: index,
    }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);