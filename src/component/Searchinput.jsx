import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktail } from "../redux/action";
import { Text } from "@chakra-ui/react";
import  "./SeachInput.css"
const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(fetchSearchCocktail(searchTerm));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <Text
            fontSize="25px"
            fontWeight={"bolder"}
            fontFamily={"mono"}
            color={"white"}
            text-shadow="2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3)"
            background={"black"}
            letter-spacing= "5px"
          >
            Search Cocktail
          </Text>
          <div style={{  marginLeft: "20px" }}>
            <input
              type="text"
              name="name"
              id="name"
              value={searchTerm}
              onChange={handleChange}
              border= "1px solid black"
              width={"100%"}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
