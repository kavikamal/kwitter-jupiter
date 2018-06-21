export const ADD_MESSAGES = 'ADD_MESSAGES';

export const messagesState = {
    messages: []
}

export default (state = messagesState, action) => {
    switch (action.type) {
        case ADD_MESSAGES:
            return { ...state, messages: action.messages };
        default:
            return state;
    }
}