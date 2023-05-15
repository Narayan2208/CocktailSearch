import * as types from "./actionTypes"
const initialState = {
    cocktails : [],
    loading : false,
    error : null,
}

const cockTailReducer = (state = initialState, action) => {
switch(action.type){
    case types.FETCH_COCKTAIL_START:
        return {
            ...state,
            loading : true
        }

        case types.FETCH_COCKTAIL_SUCCESS:
        return {
            ...state,
            loading : false,
            cocktails : action.payload
        }

        case types.FETCH_COCKTAIL_FAIL:
        return {
            ...state,
            loading : true,
            error : action.payload
        }

    default : 
    return state
}
}

export default cockTailReducer;