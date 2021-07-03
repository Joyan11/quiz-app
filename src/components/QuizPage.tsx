import { Text, Flex, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useQuizprovider } from "../context/context";
import { Navbar } from "./Navbar";
import Player from "./Player";
import { QuizContainer } from "./QuizContainer";
export const QuizPage = () => {
  const {
    state: { currentScore, currentQuestion },
    dispatch,
  } = useQuizprovider();

  return (
    <>
      <Player />
      <Box
        bgImage="url(https://cdna.artstation.com/p/assets/images/images/031/207/276/large/-1ffff.jpg?1602925838)"
        bgPosition="top"
        bgRepeat="no-repeat"
        bgSize="100% 100%"
        height={{ base: "100vh", md: "100vh" }}>
        <Navbar />
        <Flex
          mt={{ base: "1rem", md: "3rem" }}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          color="#fff">
          <Flex
            w={{ base: 200, md: 700 }}
            justifyContent="flex-start"
            className="score">
            <Text fontSize="2xl">Your Score: {currentScore}</Text>
          </Flex>
          <Flex
            maxH={{ base: 650, md: 400 }}
            maxW={{ base: 370, md: 700 }}
            style={{ backgroundColor: " rgba(0,0,0,0.8)" }}
            flexDirection={{ base: "column", md: "row" }}
            borderRadius="8px">
            <QuizContainer />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
