import {userActionTypes} from "./user.types";

export const setCurrentser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})
