import { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Button, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useQuizprovider } from "../context/context";

import { useLocation, useNavigate } from "react-router";

type State = {
  from: string | null;
};

export type Choice = {
  option: string;
  isRight: boolean;
};

export type Questions = {
  questionNo: number;
  question?: string;
  choices: Choice[];
  point: number;
};

export type Data = {
  name: string;
  questions: Questions[];
  id: string;
};

export const QuizContainer = () => {
  const {
    state: {
      quizData: { questions },
      currentScore,
      currentQuestion,
    },
    dispatch,
  } = useQuizprovider();
  const [clickedSession, setClickedSession] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as State;
  const quizType = state?.from?.split(" ").join("");

  const getData = async () => {
    try {
      const { data } = await axios.get<Data>(
        `https://quiz-server.joyan11.repl.co/quiz/${quizType}`
      );
      console.log(data);
      dispatch({
        type: "SET_INITIAL_DATA",
        payload: { questions: data.questions, name: data.name, id: data.id },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const quizOptionHandler = (answer: boolean, point: number) => {
    setClickedSession((clickedSession) => !clickedSession);
    if (answer) {
      clickedSession || dispatch({ type: "INCREMENT_SCORE", payload: point });
    }
  };

  const nextButtonHandler = (currentQuestion: number) => {
    if (currentQuestion >= 9) {
      localStorage.setItem("score", JSON.stringify(currentScore));

      navigate("/result");
    } else {
      dispatch({ type: "NEXT_QUESTION" });
      setClickedSession(false);
    }
  };

  const resetQuiz = () => {
    setClickedSession(false);
    dispatch({ type: "RESET" });
  };

  if (questions.length > 1) {
    return (
      <>
        <Flex
          m={5}
          fontWeight="700"
          flexDirection="column"
          flex="1"
          className="quiz">
          <Text fontSize="3xl">
            Question {questions[currentQuestion]?.questionNo}/10
          </Text>
          <Text letterSpacing={1} fontSize="2xl">
            {questions[currentQuestion]?.question}
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          flex="1"
          justifyContent="center"
          alignItems="center">
          {questions[currentQuestion]?.choices.map((item: any) => {
            return (
              <>
                {clickedSession ? (
                  <Button
                    className="quiz"
                    letterSpacing={1}
                    _hover={{
                      background: "transperent",
                    }}
                    _active={{
                      background: "transperent",
                    }}
                    bgColor={`${item.isRight ? "green.400" : "red.400"}`}
                    borderColor="white.500"
                    color="#fff"
                    variant="outline"
                    w="85%"
                    m="15px"
                    objectFit="contain">
                    {item.option}
                  </Button>
                ) : (
                  <Button
                    className="quiz"
                    letterSpacing={1}
                    colorScheme="white"
                    borderColor="white.500"
                    color="#fff"
                    variant="outline"
                    w="85%"
                    m="15px"
                    objectFit="contain"
                    onClick={() =>
                      quizOptionHandler(
                        item.isRight,
                        questions[currentQuestion].point
                      )
                    }>
                    {item.option}
                  </Button>
                )}
              </>
            );
          })}
          <Flex>
            <Link to="/">
              <Button
                colorScheme="transperent"
                color="#fff"
                w="50%"
                m="15px"
                objectFit="contain"
                ml={5}
                onClick={resetQuiz}>
                Home
              </Button>
            </Link>
            <Button
              colorScheme="transperent"
              color="#fff"
              w="50%"
              m="15px"
              objectFit="contain"
              onClick={resetQuiz}>
              Reset
            </Button>
            <Button
              rightIcon={<ArrowRightIcon />}
              colorScheme="transperent"
              color="#fff"
              w="50%"
              m="15px"
              objectFit="contain"
              onClick={() => nextButtonHandler(currentQuestion)}>
              Next
            </Button>
          </Flex>
        </Flex>
      </>
    );
  } else {
    return (
      <Box mt={4} fontSize="2rem">
        Loading...
      </Box>
    );
  }
};
