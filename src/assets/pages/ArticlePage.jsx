import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleAPI from "../modules/ArticleAPI";

function ArticlePage() {
  const { id } = useParams();

  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const articleUrl = `https://api.giphy.com/v1/gifs/${id}?api_key=hlh2LP71WyLvzYb6qydpiCq3Ua1BYv0e`;

  useEffect(() => {
    fetch(articleUrl)
      .then((response) => response.json())
      .then((response) => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
        setArticle(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  }, [articleUrl]);

  return (
    <>
      <ArticleAPI article={article} />
    </>
  );
}

export default ArticlePage;
