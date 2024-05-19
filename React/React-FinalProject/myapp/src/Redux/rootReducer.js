const initialState = {
    users: [],
    products: [],
    categories: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD':
            if (action.payload.type == 'users')
                return { ...state, users: action.payload.users };
            else if (action.payload.type == 'categories')
                return { ...state, categories: action.payload.categories };
            else
                return { ...state };

        case '':
            return {};

        default:
            return state;
    }
};

export default reducer;