import { Box, Button, Center, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { TbClipboard } from "react-icons/tb";

function ButtonCopyImg() {
  return (
    <>
      <Center>
        <Button
          bg="whiteAlpha.200"
          color="#bbb"
          _active={{
            transform: "scale(0.9)",
            bg: "whiteAlpha.400",
          }}
          _hover={{
            bg: "whiteAlpha.300",
            color: "#fff",
          }}
          size="sm"
          mt="1rem"
        >
          <HStack align="center">
            <TbClipboard size="23px" />

            <Text>Copy</Text>
          </HStack>
        </Button>
      </Center>
    </>
  );
}

export default ButtonCopyImg;
