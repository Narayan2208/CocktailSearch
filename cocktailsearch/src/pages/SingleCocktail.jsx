import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchSingleCocktail } from '../redux/action'
import { useSelector, useDispatch } from "react-redux"
import { Text } from '@chakra-ui/react'
import { Button, Spinner } from "@chakra-ui/react";

const SingleCocktail = () => {
  const { cocktail, loading } = useSelector((state) => ({ ...state.data }));
  const [modifiedCocktail, setModifiedCocktail] = useState(null);
  const { id } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, [id]);

  useEffect(() => {
    if (cocktail && cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
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
        instructions,
        ingredients,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(null);
    }
  }, [id, cocktail]);

  if (!modifiedCocktail) {
    return <Text>No Cocktail to display</Text>;
  } else {
    const { name, image, category, info, glass, instructions,ingredients } = modifiedCocktail;
    // const [ ingredients ] = modifiedCocktail;
    // console.log("ingredients",  ingredients);
    return (
      <>
        {loading ? (
          <Spinner color="red.500" />
        ) : (
          <section>
            <Link to="/">
              <Button>Go back</Button>
            </Link>
            <h2>{name}</h2>
            <div>
              <img src={image} alt={name} />
              <div>
                <p>
                  <span>Name :</span>{name}
                </p>
                <p>
                  <span>Category :</span>{category}
                </p>
                <p>
                  <span>Info :</span>{info}
                </p>
                <p>
                  <span>Glass :</span>{glass}
                </p>
                <p>
                  <span>Instructions :</span>{instructions}
                </p>
                <p>
                <span>ingredients :</span>
                
                {ingredients.strIngredient1}  
                {ingredients.strIngredient2}
                </p>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}

export default SingleCocktail;
