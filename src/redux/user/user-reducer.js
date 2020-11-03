const INITAL_STATE = {
    currentUser: null,
}

const userReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            // console.log('user reducer working', action)
            return {
                ...state,
                currentUser: action.payload,
            }
        default:
            return state
    }
}

export default userReducer
