import React, {Component} from 'react';
import { connect } from 'react-redux';

export default class MainLayout extends Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}