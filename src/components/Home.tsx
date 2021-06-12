import { Flex, Button, Box, Text, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuizprovider } from "../context/context";
import { useMusicprovider } from "../context/musicContext";
import { Navbar } from "./Navbar";
import Player from "./Player";

export const Home = () => {
  const buttontitle = ["spells", "houses of hogwarts", "fantastic beasts"];
  const { dispatch } = useQuizprovider();

  useEffect(() => {
    dispatch({
      type: "SET_INITIAL_DATA",
      payload: {
        id: "",
        name: "",
        questions: [{}],
      },
    });
  }, []);

  return (
    <>
      <Box
        height="100vh"
        bgImage="url(https://i.ibb.co/r4k0ZQ0/snape.jpg)"
        bgPosition="top"
        bgSize="cover">
        <Box
          height="100vh"
          w="100%"
          style={{ backgroundColor: " rgba(0,0,0,0.6)" }}>
          <Navbar />

          <Heading
            size="3xl"
            position="absolute"
            top="20%"
            left="8%"
            color="#fff"
            className="potter-font">
            The Wizard Quiz
          </Heading>

          <Box w="30%" pos="absolute" top="50%" left="10%">
            <Flex flexDirection="column">
              <Text
                fontSize="1.8rem"
                fontWeight="bold"
                mb={5}
                color="#fff"
                className="score">
                Pick A Quiz :
              </Text>
              {buttontitle.map((item) => {
                return (
                  <Link to="/quiz" state={{ from: item }}>
                    <Button
                      className="quiz"
                      style={{ backgroundColor: " rgba(0,0,0,0.8)" }}
                      colorScheme="white"
                      borderColor="white.500"
                      color="#fff"
                      variant="outline"
                      w="100%"
                      textTransform="capitalize"
                      mb={10}>
                      {item}
                    </Button>
                  </Link>
                );
              })}
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};
