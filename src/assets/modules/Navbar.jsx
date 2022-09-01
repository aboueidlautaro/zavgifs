import { Box, Image, Input, Kbd } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../static/images/logo.png";

import enter from "../static/images/enter.png";
import { Link } from "react-router-dom";

function Navbar() {
  const ref = useRef();
  let navigate = useNavigate();

  const [busqueda, setBusqueda] = useState("");

  function handleKeyUp(event) {
    // Enter
    if (event.keyCode === "Enter") {
      ref.current.submit();
    }
  }

  const onSub = (e) => {
    e.preventDefault();
    navigate("/search/" + busqueda);
    ref.current.reset();
  };

  const onChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <header>
      <Box
        w="full"
        bg="#000"
        h={{ base: "150px", md: "100px" }}
        display="flex"
        alignItems="center"
        margin="auto"
      >
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          w="90%"
          h="full"
          alignItems="center"
          margin="auto"
          justifyContent={{ base: "space-around", md: "space-between" }}
        >
          <Box
            w="15%"
            h={{ base: "50%", md: "auto" }}
            display="flex"
            alignItems="center"
          >
            <Link to="/">
              <Image w="80px" h="auto" src={logo} />
            </Link>
          </Box>
          <Box w="70%" h={{ base: "50%", md: "auto" }}>
            <form
              id="form"
              ref={ref}
              onKeyUp={handleKeyUp}
              onSubmit={onSub}
              onChange={(e) => setBusqueda(e.target.value)}
              tabIndex={0}
            >
              <Input
                w="full"
                bg="#232323"
                variant="unstyled"
                border="none"
                borderRadius="5px"
                paddingX={5}
                paddingY={2}
                color="#fff"
                _placeholder={{
                  color: "#fff",
                  backgroundImage: `url(${enter})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "43px center",
                  opacity: 0.3,
                  backgroundSize: "18px",
                }}
                placeholder="Press       for search"
              />
            </form>
          </Box>
          <Box w="15%"></Box>
        </Box>
      </Box>
    </header>
  );
}

export default Navbar;
