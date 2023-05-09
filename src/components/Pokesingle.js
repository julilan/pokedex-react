import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "./UI/Loader";

const Pokesingle = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
  }, [params.pokesingle]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <img
        src={data.sprites?.other["official-artwork"].front_default}
        alt={data.name}
      />
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Pokesingle;
