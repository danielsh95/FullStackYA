const userReucer = (state, action) => {
    switch (action.type) {
        case 'updtateUser':
            const users = state.users.f
            return {...state, users: users}

        default:
            break;
    }
}