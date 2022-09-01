import React from "react";
import {
  Box,
  Button,
  Code,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Link,
  LinkBox,
  SimpleGrid,
  Skeleton,
  Switch,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function GifsAPI({
  resultss = [],
  loading,
  error,
  page,
  limit,
  prev,
  next,
  onClick,
  search,
}) {
  const navigate = useNavigate();

  const handleArticle = (id) => {
    navigate("/article/" + id);
  };

  return (
    <>
      <Box margin={4} color="#fff">
        <FormControl
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <FormLabel htmlFor="type-file" margin="2">
              Gifs
            </FormLabel>
            <Switch id="type-file" onChange={onClick} size="lg" />
            <FormLabel htmlFor="type-file" margin="2">
              Stickers
            </FormLabel>
          </Box>
          {search !== "" && (
            <Box>
              {page === 0 ? (
                <Button disabled onClick={prev}>
                  Prev
                </Button>
              ) : (
                <Button onClick={prev}>Prev</Button>
              )}

              <Button onClick={next}>Next</Button>
            </Box>
          )}
        </FormControl>
      </Box>
      {
        <Box
          minH="full"
          h="auto"
          w="90%"
          paddingY="20px"
          style={{
            columns: "5 280px",
            margin: "auto",
          }}
        >
          {resultss.map((result) => (
            <Skeleton
              startColor="blue.500"
              borderRadius={7}
              margin={2}
              endColor="purple.500"
              isLoaded={!loading}
              key={result.id}
            >
              <Link
                _hover={{ opacity: "45%" }}
                onClick={() => handleArticle(result.id)}
                w="280px"
                h="auto"
                key={result.id}
                id={result.id}
              >
                <Image
                  w="100%"
                  borderRadius={7}
                  objectFit="cover"
                  src={result.images.downsized.url}
                  alt={result.title}
                />
              </Link>
            </Skeleton>
          ))}
        </Box>
      }
    </>
  );
}

export default GifsAPI;
