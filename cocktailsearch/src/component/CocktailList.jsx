import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktail } from "../redux/action";
import { Box, Spinner, Text, Grid, GridItem } from "@chakra-ui/react";
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
  }, []);

  if (loading) {
    return <Spinner color="red.500" />;
  }

  if (!cocktails) {
    return <Text>Mo Cocktails matched</Text>;
  }
  return (
    <>
      <h2>CocktailList</h2>
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {
            modifiedCocktail.map((item) => {
                          return (
                            <GridItem key={item.id}>
                              <img src={item.image} alt={item.name} />
                              <p>{item.name}</p>
                              <p>{item.info}</p>
                              <p>{item.glass}</p>
                            </GridItem>
                          );
                        })
          }
        </Grid>
      </Box>
    </>
  );
};

export default CocktailList;
