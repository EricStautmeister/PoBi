const ACTIONS = {
    SET_USER: 'SET_USER',
    SET_DISPLAY_NAME: 'SET_DISPLAY_NAME',
    SET_EMAIL: 'SET_EMAIL',
    SET_PHONE_NUMBER: 'SET_PHONE_NUMBER',
};

//REDUCER
const initialState = {
    displayName: null,
    email: null,
    phoneNumber: null,
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_USER:
            return {
                displayName: action.payload.displayName,
                email: action.payload.email,
                phoneNumber: action.payload.phoneNumber,
            };
        case ACTIONS.SET_DISPLAY_NAME:
            state.email = action.payload.displayName;
            return state;
        case ACTIONS.SET_EMAIL:
            return;
        case ACTIONS.SET_PHONE_NUMBER:
            return;
        default:
            return state;
    }
};

export default userReducer;