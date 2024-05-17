const initialState = {
    users: [],
    products: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD':
            if (action.payload.type == 'users')
                return { ...state, users: action.payload.users };
            else
                return { ...state };

        case '':
            return {};

        default:
            return state;
    }
};

export default reducer;