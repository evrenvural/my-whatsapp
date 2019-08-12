import { ACTION_TYPE } from '../constants';

const messages = (state = [], action) => {
    let messages = [];

    switch (action.type) {
        case ACTION_TYPE.SEND_MESSAGE:
            messages = action.payload;
            return messages;

        default:
            return state;
    }
}

export default messages;