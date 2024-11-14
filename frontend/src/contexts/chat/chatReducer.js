import { chatTypes } from "./chatTypes"

export const chatReducer = (state, action) => {

    switch (action.type) {
        case chatTypes.LOAD_USERS:
            return {
                ...state,
                users: [...action.payload]
            }
        case chatTypes.SELECT_CHAT:
            return {
                ...state,
                chatActive: action.payload
            }

        default:
            return state
    }
}