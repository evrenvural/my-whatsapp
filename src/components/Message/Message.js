import React, { Component } from 'react';
import MessageBox from './MessageBox/MessageBox.js';
import './Message.css';

export default class Message extends Component {
    render() {
        return (
            <div className="card text-white bg-info mb-3">
                <div className="card-header">EvoApp</div>
                <div className="card-body">

                    <MessageBox />

                    <div className="input">
                        <input type="text"></input>
                        <button>Gönder</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
