import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import css from "./app.css"

class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            error: "",
        };
    }

    handleInput(v) {
        this.setState({
            input: v.target.value,
        });
        v.target.value && this.setState({error: ""});
    }

    addTrack() {
        if(!this.state.input) {
            return this.setState({
                error: "Input must not be empty!"
            })
        }
        if (this.props.list.find(i => i.track === this.state.input)) {
            if(!confirm("You've already have this track, do you want add this task again?")) {
                return;
            }
        }

        this.props.onClickAddTrack(this.state.input);
        this.setState({input: ""});
    }

    editTrack (index){
        this.props.history.push(`/edit/${index}`);
    }

    deleteTrack(index) {
        if(confirm("Are you sure ?")) {
            this.props.onClickDeleteTrack(index);
        }
    }

    render() {
        return (
            <TrackList
                AddTrack={e => this.addTrack(e)}
                list={this.props.list}
                ChangeInput={e => this.handleInput(e)}
                error={this.state.error}
                inputValue={this.state.input}
                DeleteTrack={this.deleteTrack.bind(this)}
                EditTrack={this.editTrack.bind(this)}
            />
        );
    }
}

const TrackList = props => {
    return(
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
                    onClick={props.AddTrack}>
                    Add track
                </button>
                <p className="track__error">{props.error}</p>
                <ul className="list-unstyled">
                    {props.list.map((track) => (
                            <li key={track.id} className="track__item">
                                {track.track}
                                <button
                                    className="track__delete"
                                    onClick={() => {props.DeleteTrack(track.id)}}>
                                    X
                                </button>
                                <button
                                    className="track__delete"
                                    onClick={() => {props.EditTrack(track.id)}}>
                                    EDIT
                                </button>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({ list: state.playlist.tracks });

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
)(withRouter(App));