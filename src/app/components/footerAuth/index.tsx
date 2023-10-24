import { Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface IProps {}

const FooterAuth: React.FC<IProps> = () => {
  let textColor = useColorModeValue("gray.400", "white");
  let linkColor = useColorModeValue({ base: "gray.400", lg: "white" }, "white");
  return (
    <Flex
      zIndex='3'
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px={{ base: "30px", md: "0px" }}
      pb='30px'
    >
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", lg: "0px" }}
      >
        {" "}
        &copy; {new Date().getFullYear()}
        <Text as='span' fontWeight='500' ms='4px'>
          Adotar. Todos os direitos reservados. &reg; Made with love by
          <Link
            mx='3px'
            color={linkColor}
            href='https://github.com/jpcchaves'
            target='_blank'
            fontWeight='700'
          >
            jpcchaves!
          </Link>
        </Text>
      </Text>
    </Flex>
  );
};

export default FooterAuth;
