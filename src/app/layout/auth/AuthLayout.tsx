import React, { ReactNode } from "react";
// Chakra imports
import { Box, Flex } from "@chakra-ui/react";
// Custom components
import Lottie from "lottie-react";
import { authAnimation } from "../../assets";

interface IProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: IProps) => {
  return (
    <Flex position='relative' h='max-content'>
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
            bgGradient={
              "linear(to-r, #0b1437, #0a1334, #091230, #09102d, #080f29, #080e26, #070c23, #060b20, #050a1d, #04081a, #020717, #010514)"
            }
            borderBottomLeftRadius={{ lg: "120", xl: "200" }}
          >
            <Lottie animationData={authAnimation} style={{ width: 400 }} />
          </Flex>
        </Box>
        {/*<Footer />*/}
        footer here
      </Flex>
    </Flex>
  );
};

export default AuthLayout;
