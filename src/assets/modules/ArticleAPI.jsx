import { Box, Image } from "@chakra-ui/react";
import React from "react";

function ArticleAPI({ article = [] }) {
  return (
    <>
      <Box padding="80px" w="90%" margin="auto">
        <Image
          margin="auto"
          src={article.images?.downsized_medium.url}
          alt={article.title}
        />
      </Box>
    </>
  );
}

export default ArticleAPI;
