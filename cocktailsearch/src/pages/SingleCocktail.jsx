import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { fetchSingleCocktail } from '../redux/action'
import {useSelector, useDispatch} from "react-redux"
import { Text } from '@chakra-ui/react'
const SingleCocktail = () => {
  const {cocktail, loading} = useSelector ((state) => ({...state.data}));
  console.log(cocktail.length, "hi");
  const {modifiedCocktail, setModifiedCocktail} = useState(null)
  const {id} = useParams();
  let dispatch = useDispatch();

  useDispatch(()=>{
    dispatch(fetchSingleCocktail(id))
  }, [id])

  useEffect(()=>{
    if(cocktail.length > 0){
      const {
        strDrink : name,
        strDrinkThumb : image,
        strAlcoholic : info,
        strCategory : category,
        strGlass : glass,
        strInstructions : instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,

      } = cocktail[0];
      const ingredients = {
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      };
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions
      }
      setModifiedCocktail(newCocktail)
    }else{
      setModifiedCocktail(null)
    }
  }, [id, cocktail])

  if(!modifiedCocktail){
    return <Text>No Cocktail to display</Text>
  }
  return (
    <div>SingleCocktail</div>
  )
}

export default SingleCocktail