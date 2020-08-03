const initialState = {
    message: null
}

const toSeconds = (time) => {
    return Math.floor((time * 1000))
}

const notificationsReducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
        case 'SET_NOTIFICATION':
            return {...state, message: action.msg} 
        case 'CLEAR_NOTIFICATION':
            return {...state, message: null}
        default:
            return state
    }
}

export const setNotification = (msg, duration) => {
    return async dispatch => {
        let timeout = null
        if (timeout !== null) {clearInterval(timeout)}
        dispatch({
            type: 'SET_NOTIFICATION',
            msg
        })
        timeout = setTimeout(() => {
            dispatch({
                type: 'CLEAR_NOTIFICATION',
            })
        }, toSeconds(duration))
    }
}

export const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION'
    }
}

export default notificationsReducer