import { Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useQuizprovider } from "../context/context";

export const Navbar = () => {
  const { dispatch } = useQuizprovider();
  return (
    <Flex
      style={{ backgroundColor: " rgba(0,0,0,0.0)" }}
      justifyContent="flex-end">
      <Link to="/">
        <Button
          colorScheme="transperent"
          color="#fff"
          w="auto"
          m="1rem"
          objectFit="contain"
          mr="1rem"
          onClick={() => dispatch({ type: "RESET" })}>
          Home
        </Button>
      </Link>
      <Link to="/leaderboard">
        <Button
          colorScheme="transperent"
          color="#fff"
          w="auto"
          m="1rem"
          objectFit="contain"
          mr="1rem">
          Leaderboard
        </Button>
      </Link>
      {/* <Link to="/login">
        <Button
          colorScheme="transperent"
          color="#fff"
          w="auto"
          m="1rem"
          objectFit="contain"
          mr="1rem">
          Login
        </Button>
      </Link> */}
    </Flex>
  );
};
