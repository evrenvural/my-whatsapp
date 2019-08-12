import {ACTION_TYPE} from '../constants';

export const sendMessage = (text) => {
    const actions = {
        type: ACTION_TYPE.SEND_MESSAGE,
        text: text
    }

    return actions;
}