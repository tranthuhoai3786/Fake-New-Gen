// reducers.js
const initialState = {
    data: null,
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, data: action.payload };
        default:
            return state;
    }
};