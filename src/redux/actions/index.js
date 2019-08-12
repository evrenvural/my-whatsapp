import {ACTION_TYPE} from '../constants';
import { messagesRef } from '../../firebase';

export const sendMessage = text => async dispatch => {
    messagesRef.push().set(text);
}

export const fetchMessages = () => async dispatch => {
    messagesRef.on('value', snapshot =>{
        dispatch({
            type: ACTION_TYPE.SEND_MESSAGE,
            payload: Object.values(snapshot.val())
        });
    });
};