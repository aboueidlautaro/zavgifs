import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import GifsAPI from "../modules/GifsAPI";

function SearchPage() {
  const { search } = useParams();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState("gifs");
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const resultss = results;

  const gifSearchUrl = `https://api.giphy.com/v1/${file}/search?api_key=hlh2LP71WyLvzYb6qydpiCq3Ua1BYv0e&q=${search}&limit=${limit}&offset=${page}&rating=g&lang=en`;

  const onClick = () => {
    if (file === "gifs") {
      setFile("stickers");
    } else {
      setFile("gifs");
    }
  };

  const prev = () => {
    if (page === 0) {
      setPage(0);
    } else {
      setPage(page - limit);
    }
  };
  const next = () => {
    setPage(page + limit);
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
    <GifsAPI
      resultss={resultss}
      loading={loading}
      error={errorMessage}
      page={page}
      limit={limit}
      prev={prev}
      next={next}
      onClick={onClick}
    />
  );
}

export default SearchPage;
