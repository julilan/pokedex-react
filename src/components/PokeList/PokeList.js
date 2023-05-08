import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../UI/Card";
import Loader from "../UI/Loader";
import classes from "./PokeList.module.css";

const Pokemons = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
      .then((res) => {
        //console.log(res.data.results);
        const fetches = res.data.results.map((result) => {
          return axios.get(result.url).then((res) => res.data);
        });
        Promise.all(fetches).then((res) => {
          setData(res);
          setisLoading(false);
        });
      });
  }, []);

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const searchFilter = data.filter((item) => {
    return item.name.includes(searchInput);
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search pokemons"
        onChange={searchInputHandler}
      />
      <div className={classes.cards}>
        {searchFilter.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            img={card.sprites.other["dream_world"].front_default}
          />
        ))}
      </div>
    </>
  );
};

export default Pokemons;
