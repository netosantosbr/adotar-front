import { Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { animation404 } from "../../assets";

interface PageNotFoundProps {}

const PageNotFound: React.FC<PageNotFoundProps> = () => {
  const navigate = useNavigate();

  const navigateToPreviousPage = () => {
    const PREV_PAGE = -1;
    navigate(PREV_PAGE);
  };

  return (
    <Center w={"100vw"} h={"100vh"}>
      <Flex flexDir='column' alignItems={"center"}>
        <Heading pb={6}>Página não encontrada</Heading>
        <Text pb={12}>Não conseguimos encontrar o que você está buscando</Text>
        <Lottie
          animationData={animation404}
          style={{ width: 300, backgroundColor: "transparent" }}
        />
        <Link
          pt={12}
          variant='link'
          color='navy'
          onClick={navigateToPreviousPage}
        >
          Voltar
        </Link>
      </Flex>
    </Center>
  );
};

export default PageNotFound;
