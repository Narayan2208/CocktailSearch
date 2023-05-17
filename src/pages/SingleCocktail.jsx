import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { Badge, Box, CardBody, Flex, Text } from "@chakra-ui/react";
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
          
          <Card maxW="3xl" m={"auto"}>
          <Link to="/">
              <Button mt={"10px"} colorScheme="green">Go back</Button>
            </Link>
            <CardBody>
            <Flex>
             <Box w={"100%"}> <Image src={image} alt={name} w={"100%"} h={"50vh"} m={"auto"} borderRadius="lg" /></Box>
              <Stack mt="3" spacing="5" >
                <Heading size="md"> <Badge ml='1' colorScheme='green' fontSize='1em'>Name</Badge>  : {name}</Heading>
                <Text><Badge ml='1' colorScheme='blue' fontSize='1em'> Category</Badge> : {category}</Text>
                <Text color="blue.600" fontSize="xl">
                <Badge ml='1' colorScheme='red' fontSize='1em'>Info</Badge> : {info}
                </Text>
                <Text color="orange.900" fontSize="xl">
                <Badge ml='1' colorScheme='purple' fontSize='1em'>Glass</Badge>  : {glass}
                </Text>
                <Text color="green.900" fontSize="xl">
                <Badge ml='1' colorScheme='orange' fontSize='1em'>Instructions </Badge> : {instructions}
                </Text>
                <Text color="red.600" fontSize="xl">
                <Badge ml='1' colorScheme='yellow' fontSize='1em'>ingredients </Badge> :  {ingredients.map((item, index) => (
                    <span key={index}>{item} </span> 
                  ))}
                </Text>
              </Stack>
              </Flex>
            </CardBody>
            <Divider />
          </Card>
        )}
      </>
    );
  }
};

export default SingleCocktail;

