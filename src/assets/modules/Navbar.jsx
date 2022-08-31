import { Box, Image, Input } from "@chakra-ui/react";
import React from "react";
import logo from "../static/images/logo.png";

function Navbar() {
  return (
    <header>
      <Box
        w="full"
        bg="#000"
        h="80px"
        display="flex"
        alignItems="center"
        margin="auto"
      >
        <Box display="flex" w="90%" alignItems="center" margin="auto">
          <Box w="15%">
            <Image h="60px" src={logo} />
          </Box>
          <Box w="85%">
            <Input bg="#232323" border="none" placeholder="Basic usage" />
          </Box>
        </Box>
      </Box>
    </header>
  );
}

export default Navbar;
