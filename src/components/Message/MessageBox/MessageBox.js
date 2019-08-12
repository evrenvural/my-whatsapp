import React, { Component } from 'react';
import './MessageBox.css';

export default class MessageBox extends Component {
    render() {
        return (
            <div id="messageBox">
                <label>{this.props.value}</label>
            </div>
        )
    }
}
