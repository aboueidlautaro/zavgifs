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
        h="80px"
        display="flex"
        alignItems="center"
        margin="auto"
      >
        <Box display="flex" w="90%" alignItems="center" margin="auto">
          <Box w="15%">
            <Link to="/">
              <Image h="50px" src={logo} />
            </Link>
          </Box>
          <Box w="85%">
            <form
              id="form"
              ref={ref}
              onKeyUp={handleKeyUp}
              onSubmit={onSub}
              onChange={(e) => setBusqueda(e.target.value)}
              tabIndex={0}
            >
              <Input
                bg="#232323"
                variant="unstyled"
                border="none"
                borderRadius="5px"
                paddingX={5}
                paddingY={2}
                color="#fff"
                _placeholder={{
                  color: "#fff",
                  paddingX: 5,
                  backgroundImage: `url(${enter})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "63px center",
                  opacity: 0.3,
                  backgroundSize: "18px",
                }}
                placeholder="Press       for search"
              />
            </form>
          </Box>
        </Box>
      </Box>
    </header>
  );
}

export default Navbar;
