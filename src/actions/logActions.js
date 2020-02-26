import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS
} from './types';

//Get logs from server
export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('http://localhost:5000/logs');
        const data = await res.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }

}

//Add log to server
export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('http://localhost:5000/logs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(log)

        });
        const data = await res.json();
        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }

}


//Delete log from server
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`http://localhost:5000/logs/${id}`, {
            method: 'DELETE',
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }

}

//Set current
export const setCurrent = (log) => {
    console.log('called setcurrent', '')
    return {
        type: SET_CURRENT,
        payload: log
    }
}

//Clear current
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

//Update log from server
export const updateLog = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`http://localhost:5000/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }

}

//Search log from server
export const searchLogs = (text) => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`http://localhost:5000/logs/?q=${text}`);
        const data = await res.json();
        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }

}

// set SET_LOADING to true
const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export default addLog;