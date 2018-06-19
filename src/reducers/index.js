import { LOGIN_USER } from '../actions';

const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:

            break;
        default:
            return state;
    }

}
