import React, {Component} from 'react';

export default class App extends Component
{
    constructor(props) {
        super(props);
        this.state = ({
            text: ""
        });
    }

    handleInputChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="text">Enter text here</label>
                            <input
                                type="text"
                                value={this.state.text}
                                className="form-control"
                                id="text"
                                placeholder="Enter your text"
                                onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Hello {this.state.text || 'stranger'}</h1>
                    </div>
                </div>
            </div>
        );
    }
}