import React, {Component} from 'react';

export default class App extends Component
{
    constructor(props) {
        super(props);
        this.state = ({
            expression: "",
            result: 0
        });
    }

    handleInputChange(event) {
        let data = event.target.value;
        if (validateData(data)) {
            let result = data.match(/([\/+\-*(]$)|([(][0-9\/+\-*]*[^)]$)/igm) ? this.state.result : eval(data);
            this.setState({expression: data, result: result});
        } else {
            alert("Only numbers and ['/', '*', '+', '-', '(', ')']");
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="text">Enter expression below</label>
                            <input
                                type="text"
                                value={this.state.expression}
                                className="form-control"
                                id="text"
                                placeholder="Example: (2+6)/3"
                                onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Result: {this.state.expression && this.state.result}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

function validateData(data) {
    return !data.match(/[^0-9+*\-/()]/igm);
}