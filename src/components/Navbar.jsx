import React from "react";
import { Box, Flex, Text, Button, Stack, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "gray.100" : "gray.900"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontSize="xl" fontWeight="bold" ml="2" color={colorMode === "light" ? "gray.800" : "white"}>
          Verbatim
        </Text>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>{colorMode === "light" ? <FaMoon /> : <FaSun />}</Button>

            <Button as={Link} to="/login" fontSize={"sm"} fontWeight={400}>
              Sign In
            </Button>
            <Button
              as={Link}
              to="/signup"
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"purple.400"}
              _hover={{
                bg: "purple.300",
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;