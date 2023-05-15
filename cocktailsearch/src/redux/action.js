import * as types from "./actionTypes"
import axios from 'axios';

const fetchCockTailStart = () => ({
    type: types.FETCH_COCKTAIL_START
})
const fetchCockTailSuccess = (cocktails) => ({
    type: types.FETCH_COCKTAIL_SUCCESS,
    payload: cocktails,
})
const fetchCockTailFail = (error) => ({
    type: types.FETCH_COCKTAIL_FAIL,
    payload: error,
})

export function fetchCocktail() {
    return function (dispatch){
        dispatch(fetchCockTailStart());
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s").then((response) =>{
            const cocktails = response.data.drinks;
            dispatch(fetchCockTailSuccess(cocktails))
        }).catch((error) => {
          dispatch(fetchCockTailFail(error))  
        })
    }
}