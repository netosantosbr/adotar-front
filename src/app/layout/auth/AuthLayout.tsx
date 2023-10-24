import React, { ReactNode } from "react";
// Chakra imports
import { Box, Flex } from "@chakra-ui/react";
// Custom components
import Lottie from "lottie-react";
import { authAnimation } from "../../assets";
import FooterAuth from "../../components/footerAuth";
import ThemeToggle from "../../components/themeToggle";

interface IProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: IProps) => {
  return (
    <Flex position='relative' h='max-content'>
      <ThemeToggle />

      <Flex
        h={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "97vh",
        }}
        w='100%'
        maxW={{ md: "66%", lg: "1313px" }}
        mx='auto'
        pt={{ sm: "50px", md: "0px" }}
        px={{ lg: "30px", xl: "0px" }}
        ps={{ xl: "70px" }}
        justifyContent='start'
        direction='column'
      >
        {children}
        <Box
          display={{ base: "none", md: "block" }}
          h='100%'
          minH='100vh'
          w={{ lg: "50vw", "2xl": "44vw" }}
          position='absolute'
          right='0px'
        >
          <Flex
            justify='center'
            align='center'
            w='100%'
            h='100%'
            position='absolute'
            bgGradient={"linear(to-r, #1b254b, #111c44, #0b1437)"}
            borderBottomLeftRadius={{ lg: "120", xl: "200" }}
          >
            <Lottie animationData={authAnimation} style={{ width: 500 }} />
          </Flex>
        </Box>
        <FooterAuth />
      </Flex>
    </Flex>
  );
};

export default AuthLayout;
