const initialState = {
    users: [
        { id: 1, firstName: 'Avi', lastName: 'Cohen', age: 23 },
        { id: 2, firstName: 'Dana', lastName: 'Levy', age: 15 }
    ]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addUser':
            return { ...state, users: [...state.users, action.payload] }

        case 'UpdateUser':
            return {
                ...state, users: state.users.map(user => {
                    if (user.id == action.payload.id)
                        return action.payload
                    else
                        return user
                })
            }
        case 'deleteUser':
            return {
                ...state, users: state.users.filter(user => user.id != action.payload.id)
            }

        default:
            return state
    }
}
export default userReducer