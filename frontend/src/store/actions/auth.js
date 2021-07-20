export const authActionTypes = {
    SET_USER: "SET_USER",
    SET_USER_DATA: "SET_USER_DATA"
}


// setUser Action Creator
export const setUser = (user) => {
    localStorage.setItem("gprime@user", JSON.stringify(user));
    return {
        type: authActionTypes.SET_USER,
        payload: user
    }
}


// Dispatchable functions
export const setLocalUser = () => {
    const user = localStorage.getItem("gprime@user")
    if (user) {
        return dispatch => {
            dispatch(setUser(JSON.parse(user)))
        }
    }
}