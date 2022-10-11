import React from "react";

import { useEffect } from "react";
import { useState } from "react";

import GifsAPI from "../modules/GifsAPI";

function Home() {
  const search = "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState("gifs");
  const [limit, setLimit] = useState(50);
  const [page, setPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const resultss = results;

  const gifSearchUrl = `https://api.giphy.com/v1/${file}/trending?api_key=hlh2LP71WyLvzYb6qydpiCq3Ua1BYv0e&limit=${limit}&rating=g`;

  const onClick = () => {
    if (file === "gifs") {
      setFile("stickers");
    } else {
      setFile("gifs");
    }
  };

  useEffect(() => {
    fetch(gifSearchUrl)
      .then((response) => response.json())
      .then((response) => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
        setResults(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  }, [gifSearchUrl]);

  return (
    <>
      <GifsAPI
        resultss={resultss}
        loading={loading}
        error={errorMessage}
        onClick={onClick}
        search={search}
      />
    </>
  );
}

export default Home;
