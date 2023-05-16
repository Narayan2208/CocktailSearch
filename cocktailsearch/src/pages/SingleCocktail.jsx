import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { CardBody, Text } from "@chakra-ui/react";
import { Button, Spinner } from "@chakra-ui/react";
import {
  ButtonGroup,
  Card,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
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
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ].filter(Boolean);
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
    const { name, image, category, info, glass, instructions, ingredients } =
      modifiedCocktail;
    console.log("ingredients", ingredients);
    return (
      <>
        {loading ? (
          <Spinner color="red.500" />
        ) : (
          
          <Card maxW="md" m={"auto"}>
          <Link to="/">
              <Button colorScheme="green">Go back</Button>
            </Link>
            <CardBody>
              <Image src={image} alt={name} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Name : {name}</Heading>
                <Text><b>Category</b> : {category}</Text>
                <Text color="blue.600" fontSize="xl">
                  <b>Info</b> : {info}
                </Text>
                <Text color="orange.900" fontSize="xl">
                 <b>Glass</b>  : {glass}
                </Text>
                <Text color="green.900" fontSize="xl">
                  <b>Instructions </b> : {instructions}
                </Text>
                <Text color="red.600" fontSize="xl">
                 <b>ingredients </b> :  {ingredients.map((item, index) => (
                    <span key={index}>{item} </span> 
                  ))}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        )}
      </>
    );
  }
};

export default SingleCocktail;

