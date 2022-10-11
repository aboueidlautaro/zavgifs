import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Collapse,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ButtonCopyImg from "../components/ButtonCopyImg";
import noAvatar from "../static/images/no_avatar.png";

import verified from "../static/images/verified.png";

function ArticleAPI({ article = [] }) {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        textColor="#FAF9F1"
        w={{ base: "80%", sm: "90%", md: "85%" }}
        margin="auto"
        textAlign={"center"}
        paddingY={{ base: "0px", md: "90px" }}
        h="100%"
      >
        <Box marginBottom={5} w={{ base: "100%", md: "35%" }}>
          <Box
            marginY={10}
            paddingY={5}
            display="flex"
            justifyContent="space-evenly"
          >
            {!article.user?.avatar_url ? ( //NO TIENE AVATAR
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                h="50%"
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Image
                    objectFit="cover"
                    boxSize="50px"
                    borderRadius="6px"
                    src={noAvatar}
                  />

                  <Box
                    marginX="15px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Heading as="h2" size="md">
                      Not available
                    </Heading>
                    <Text fontSize="sm">@not_available</Text>
                  </Box>
                </Box>
              </Box>
            ) : (
              //TIENE AVATAR
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                h="50%"
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Avatar
                    objectFit="cover"
                    boxSize="50px"
                    src={article.user?.avatar_url}
                  >
                    <AvatarBadge color="#fff" boxSize="1.25em" border="none">
                      <Image src={verified}></Image>
                    </AvatarBadge>
                  </Avatar>

                  <Box
                    marginX="15px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Heading as="h2" size="md">
                      {article.user?.display_name}
                    </Heading>
                    <Text fontSize="sm">@{article.user?.username}</Text>
                  </Box>
                </Box>
                <Box paddingY={4} w="90%">
                  <Collapse startingHeight={20} in={show}>
                    {article.user?.description}
                  </Collapse>
                  <Button
                    color="#000"
                    size="sm"
                    onClick={handleToggle}
                    mt="1rem"
                  >
                    Show {show ? "Less" : "More"}
                  </Button>
                </Box>

                <Box></Box>
              </Box>
            )}
          </Box>
        </Box>
        <Box
          h={{ base: "200px", sm: "auto" }}
          w={{ base: "100%", sm: "85%", md: "65%" }}
          margin="auto"
        >
          <Image
            borderRadius={15}
            objectFit="contain"
            margin="auto"
            w="auto"
            maxH={article.images?.downsized_medium.height}
            src={article.images?.downsized_medium.url}
            alt={article.title}
          />
          <ButtonCopyImg />
        </Box>
      </Box>
    </>
  );
}

export default ArticleAPI;
