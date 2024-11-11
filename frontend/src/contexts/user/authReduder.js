import { authTypes } from "./authTypes"

export const authReducer = (state, action) => {
    switch (action.type) {
        case authTypes.LOGIN:
            return {
                ...state,
                user: action.payload.user
            }
        case authTypes.SESSION:
            return {
                ...state,
                user: action.payload.user
            }
        case authTypes.LOGOUT:
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}