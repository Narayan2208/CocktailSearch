import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { fetchCocktail } from '../redux/action';
const CocktailList = () => {
  let dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCocktail())
  }, [])
  return (
    <>
      <h2>CocktailList</h2>
    </>
  )
}

export default CocktailList