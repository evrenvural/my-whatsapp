import React, { Component } from 'react';
import MessageBox from './MessageBox/MessageBox.js';
import './Message.css';

import { connect } from 'react-redux';
import { sendMessage, fetchMessages } from '../../redux/actions';

class Message extends Component {

    constructor() {
        super();
        this.state = {
            value: '',
        };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    sendMessage = () => {
        this.props.sendMessage(this.state.value);
        this.setState({ value: "" });
    }

    componentWillMount() {
        this.props.fetchMessages();
    }

    render() {
        return (
            <div className="card text-white bg-info mb-3">
                <div className="card-header">EvoApp</div>
                <div className="card-body">
                    <div className="messages">
                        {this.props.messages.map((message) => <MessageBox value={message} />)}
                    </div>


                    <div className="input">
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        <button onClick={this.sendMessage}>Gönder</button>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        messages: state
    }
)

export default connect(
    mapStateToProps,
    {
        sendMessage,
        fetchMessages
    }
)(Message);