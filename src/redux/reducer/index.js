import {ACTION_TYPE} from '../constants';

const messages = (state = [], action) => {
    let messages = null;

    switch(action.type){
        case ACTION_TYPE.SEND_MESSAGE:
            messages = [...state, action.text];
        
        return messages;

        default:
            return state;
    }
}

export default messages;