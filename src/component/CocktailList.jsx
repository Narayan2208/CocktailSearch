import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktail } from "../redux/action";
import {Button, Box, Spinner, Text, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const CocktailList = () => {
  let dispatch = useDispatch();
  const { cocktails, loading } = useSelector((state) => ({ ...state.data }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);

  useEffect(() => {
    dispatch(fetchCocktail());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);

  if (loading) {
    return <Spinner color="red.500" />;
  }

  if (!cocktails) {
    return <Text fontSize={"50px"} fontFamily={"mono"} fontWeight={"bolder"} color={"black"}>No Cocktails matched❗</Text>;
  }
  return (
    <>
      <Text fontSize={"50px"} fontWeight={"bolder"} fontFamily={"monospace"}>CocktailList</Text>
      <Box >
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {modifiedCocktail.map((item) => {
            return (
              <GridItem background= "rgba( 0, 0, 0, 0.6 )" box-shadow= "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )" backdrop-filter= "blur( 7px )" border-radius= "10px" border= "1px solid rgba( 255, 255, 255, 0.18 )" key={item.id}>
                <img src={item.image} alt={item.name} />
                <Text color={"white"} fontSize={"20px"} fontWeight={"bold"}>{item.name}</Text>
                <Text color={"white"} fontSize={"18px"}>{item.info}</Text>
                <Text color={"white"} fontSize={"18px"}>{item.glass}</Text>
                <Link to={`/cocktail/${item.id}`}>
                  <Button m={"20px"} colorScheme="green">Info</Button>
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default CocktailList;
