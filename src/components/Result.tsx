/** @format */

import { Box, Text, Button, Flex, Input } from "@chakra-ui/react";
import { useQuizprovider } from "../context/context";
import { labelCheck } from "../utils/labelCheck";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import axios, { AxiosError } from "axios";
import { toastMessages } from "../utils/toastMessage";
import { ServerError } from "./types/types";

type Success = {
  success: boolean;
};

export const Result = () => {
  const {
    state: { currentScore, quizData },
    dispatch,
  } = useQuizprovider();

  const [showBox, setShowBox] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const saveResult = async () => {
    const label = labelCheck(currentScore);
    if (text !== "") {
      try {
        const response = await axios.post<Success>(
          "https://quiz-server.joyan11.repl.co/leaderboard",
          {
            data: {
              name: text,
              quizname: quizData.name,
              score: currentScore,
              tag: label,
            },
          }
        );
        if (response.status === 200) {
          toastMessages("Scored saved to Leaderboard");
        }
      } catch (error) {
        console.log(error);
        if (axios.isAxiosError(error)) {
          const serverError = error as AxiosError<ServerError>;
          if (serverError && serverError.response) {
            toastMessages(serverError.response.data.message);
          }
        }
        toastMessages("Something went wrong");
      } finally {
        setText("");
        setShowBox(false);
      }
    }
  };

  return (
    <Box
      bgImage="url('https://www.teahub.io/photos/full/294-2945475_severus-snape-wallpaper-hd.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition={{ base: "center" }}
      h="100vh">
      <Navbar />
      <Box position="absolute" top="30%" left="10%">
        <Text fontSize="2rem" color="#fff" fontWeight="700">
          Your Score is {currentScore}. That Makes You A{" "}
          {labelCheck(currentScore)}
        </Text>
        <Flex marginTop="1rem">
          {currentScore !== 0 && (
            <>
              <Text
                fontSize="1rem"
                color="#fff"
                marginTop="0.5rem"
                fontWeight="700">
                Would you like to Save your Score?
              </Text>
              <Button
                colorScheme="transperent"
                color="#fff"
                w="10%"
                objectFit="contain"
                onClick={() => setShowBox(true)}>
                YES
              </Button>
            </>
          )}
        </Flex>
        {showBox && (
          <Flex mt={5} mb={5}>
            <Input
              w={{ base: "70%", md: "50%" }}
              style={{ backgroundColor: " rgba(0,0,0,0.8)" }}
              color="#fff"
              onChange={(e) => setText(e.target.value)}></Input>{" "}
            <Button
              style={{ backgroundColor: " rgba(0,0,0,0.8)" }}
              colorScheme="white"
              borderColor="white.500"
              color="#fff"
              variant="outline"
              ml={2}
              onClick={saveResult}
              disabled={text === "" ? true : false}>
              Save
            </Button>
          </Flex>
        )}
        <Flex
          maxW={{ base: "70%", md: "60%" }}
          ml={{ base: "2rem" }}
          justifyContent={{ md: "space-between" }}
          flexDirection={{ base: "column", md: "row" }}
          mt="2rem">
          <Link to="/">
            <Button
              style={{ backgroundColor: " rgba(0,0,0,0.8)" }}
              colorScheme="white"
              borderColor="white.500"
              color="#fff"
              variant="outline"
              w="100%"
              mb={10}
              onClick={() => dispatch({ type: "RESET" })}>
              Home
            </Button>
          </Link>
          <Link to="/quiz">
            <Button
              style={{ backgroundColor: " rgba(0,0,0,0.8)" }}
              colorScheme="white"
              borderColor="white.500"
              color="#fff"
              variant="outline"
              w="100%"
              mb={10}
              onClick={() => dispatch({ type: "RESET" })}>
              Play Again
            </Button>
          </Link>
          <Link to="/leaderboard">
            <Button
              style={{ backgroundColor: " rgba(0,0,0,0.8)" }}
              colorScheme="white"
              borderColor="white.500"
              color="#fff"
              variant="outline"
              w="100%"
              mb={10}>
              Leaderboards
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};
