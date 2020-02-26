import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECH_ERRORS
} from './types';

//Get techs from server
export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('http://localhost:5000/tech');
        const data = await res.json();
        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: TECH_ERRORS,
            payload: error.response.statusText
        })
    }

}

//Add Tech to server
export const addTech = (tech) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('http://localhost:5000/tech', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tech)

        });
        const data = await res.json();
        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: TECH_ERRORS,
            payload: error.response.statusText
        })
    }

}
//Delete tech from server
export const deleteTech = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`http://localhost:5000/tech/${id}`, {
            method: 'DELETE',
        });
        console.log("delete tech id:", id)
        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: TECH_ERRORS,
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
    ;
export default getTechs;