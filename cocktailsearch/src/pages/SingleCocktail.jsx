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
    const { name, image, category, info, glass, instructions, ingredients } = modifiedCocktail;
    return (
      <>
        {loading ? (
          <Spinner color="red.500" />
        ) : (
          <section>
            <Link to="/">
              <Button>Go back</Button>
            </Link>
          </section>
        )}
      </>
    );
  }
}

export default SingleCocktail;
