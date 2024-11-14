import { chatTypes } from "./chatTypes"

export const chatReducer = (state, action) => {
    switch (action.type) {
        case chatTypes.ADD_MESSAGE:
            return {
                ...state,
                user: action.payload.user
            }
        case chatTypes.ADD_USER:
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state
    }
}