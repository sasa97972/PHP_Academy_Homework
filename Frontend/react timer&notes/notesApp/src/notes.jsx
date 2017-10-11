import React, {Component} from 'react';

export default class NotesApp extends Component
{
    constructor(props) {
        super(props);
        this.state = ({
            notes: [],
        });
    }

    componentDidMount() {
        let localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    _updateLocalStorage() {
        let notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }

    handleNoteDelete(note) {
        let noteId = note.id;
        let newNotes = this.state.notes.filter(function(note) {
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    }

    handleNoteAdd(newNote) {
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    }

    render() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteEditor onNoteAdd={(newNote) => this.handleNoteAdd(newNote)} />
                <NotesGrid notes={this.state.notes} onNoteDelete={(note) => this.handleNoteDelete(note)} />
            </div>
        );
    }
}

const Note = (props) => {
    let style = { backgroundColor: props.color };
    return (
        <div className="note" style={style}>
            <span className="delete-note" onClick={props.onDelete}> × </span>
            {props.children}
        </div>
    );
};

class NotesGrid extends Component
{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let grid = this.refs.grid;
        this.msnry = new Masonry( grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    render() {
        let onNoteDelete = this.props.onNoteDelete;
        return (
            <div className="notes-grid" ref="grid">
                {
                    this.props.notes.map(function(note){
                        return (
                            <Note
                                key={note.id}
                                onDelete={onNoteDelete.bind(null, note)}
                                color={note.color}>
                                {note.text}
                            </Note>
                        );
                    })
                }
            </div>
        );
    }
}

class NoteEditor extends Component
{
    constructor(props) {
        super(props);
        this.state=({
            text: "",
            color: "white"
        });
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

     handleColorChange(event) {
        let containerClicked = $(event.target);
        let color = containerClicked.css("backgroundColor");
        this.containres.not(containerClicked).removeClass("colors__active");
        containerClicked.addClass("colors__active");
        $(".note-editor").css("backgroundColor", color);
        $(".textarea").css("backgroundColor", color);
        this.setState({ color: color });
    }

    componentDidMount() {
        $(".colors__wrap:first-child .color__item").addClass("colors__active");
        this.containres = $(".color__item");
    }

    handleNoteAdd() {
        let newNote = {
            text: this.state.text,
            color: this.state.color,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: '' });
    }

    render() {
        let colors = ["white", "rgb(255, 255, 141)", "rgb(204, 255, 144)", "rgb(255, 138, 128)"];
        return (
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={(e) => this.handleTextChange(e)}
                />
                <div className="editor__info">
                    <div className="colors">
                        <div className="colors__button">
                            <i className="fa fa-paint-brush" aria-hidden="true"></i>
                        </div>
                        <div className="colors__container">
                            {
                                colors.map((color, index) => {
                                    return (
                                        <div key={index} className="colors__wrap" style={{borderColor: color}} onClick={(e) => this.handleColorChange(e)}>
                                            <span style={{backgroundColor: color}} className="color__item"></span>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <button className="add-button" onClick={() => this.handleNoteAdd()}>Add</button>
                </div>
            </div>
        );
    }
}