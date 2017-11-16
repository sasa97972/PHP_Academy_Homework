import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class Edit extends Component
{
    constructor(props) {
        super(props);
        let track = this.props.list.find(i => i.id == this.props.match.params.trackId);
        this.state = {
            text: track.track,
            id: track.id,
            input: track.track
        }
    }

    handleInput(v) {
        this.setState({
            input: v.target.value,
        });
        v.target.value && this.setState({error: ""});
    }

    editTrack() {
        if(!this.state.input) {
            return this.setState({
                error: "Input must not be empty!"
            })
        }
        if (this.props.list.find(i => i.track === this.state.input)) {
            if(!confirm("You've already have this track, do you want add this track again?")) {
                return;
            }
        }

        this.props.onClickEditTrack({
            track: this.state.input,
            id: this.state.id
        });
        this.setState({input: ""});
        this.props.history.push('/');
    }

    undoTrack() {
        this.setState({input: this.state.text});
    }

    render() {
        return(
            <EditLayout
                changeInput={v => this.handleInput(v)}
                inputValue={this.state.input}
                editTrack={this.editTrack.bind(this)}
                error={this.state.error}
                undoTrack={this.undoTrack.bind(this)}
            />
        );
    }
}

const EditLayout = (props) => {
    return(
        <div className="row">
            <div className="col-md-12 track__content">
                <h1 className="track__header">Edit track</h1>
                <button
                    className="track__undo"
                    onClick={props.undoTrack}>
                    Undo
                </button>
                <input
                    className="track__input track__input_edit"
                    type="text"
                    value={props.inputValue}
                    onChange={v => props.changeInput(v)}
                />
                <button
                    className="track__submit"
                    onClick={props.editTrack}>
                    Edit track
                </button>
                <p className="track__error">{props.error}</p>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({ list: state.playlist.tracks});

const mapDispatchToProps = dispatch => ({
    onClickEditTrack: (newItem) => dispatch({
        type: "EDIT_TRACK",
        payload: newItem,
    }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(Edit));