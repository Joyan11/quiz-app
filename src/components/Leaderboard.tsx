import { Box, Table, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useEffect } from "react";
import { useQuizprovider } from "../context/context";
import { Scores } from "../context/types/types";
import { Navbar } from "./Navbar";
import axios, { AxiosError } from "axios";
import { LeaderBoard, ServerError } from "./types/types";
import { toastMessages } from "../utils/toastMessage";

export const Leaderboard = () => {
  const {
    state: { leaderBoard },
    dispatch,
  } = useQuizprovider();

  const getData = async () => {
    try {
      const { data } = await axios.get<LeaderBoard>(
        `https://quiz-server.joyan11.repl.co/leaderboard`
      );
      dispatch({
        type: "ADD_TO_LEADERBOARD",
        payload: data,
      });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          toastMessages(serverError.response.data.message);
        }
      }
      toastMessages("Something went wrong");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box
      bgImage="url('https://www.teahub.io/photos/full/294-2945475_severus-snape-wallpaper-hd.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="100vh"
      overflow="auto">
      <Navbar />
      <Table
        style={{ backgroundColor: " rgba(0,0,0,0.9)" }}
        w={{ base: "20%", md: "40%" }}
        variant="simple"
        marginLeft="auto"
        marginRight="auto">
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Quiz</Th>
            <Th>Tag</Th>
            <Th isNumeric>Score</Th>
          </Tr>
        </thead>
        <Tbody color="#fff">
          {leaderBoard?.map((item: Scores) => {
            return (
              <Tr>
                <Td p={{ base: 2.5, md: 5 }}>{item.name}</Td>
                <Td p={{ base: 2.5, md: 5 }}>{item.quizname}</Td>
                <Td p={{ base: 2.5, md: 5 }}>{item.tag}</Td>
                <Td p={{ base: 2.5, md: 5 }} isNumeric>
                  {item.score}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};
