import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FormikValues } from "formik";
import React from "react";
import { InputComponent } from "../../../../components";
import AuthLayout from "../../../../layout/auth/AuthLayout";
import { PasswordInput } from "../../components/passswordInput";
import { NavLink } from "react-router-dom";

interface IProps {
  validation: FormikValues;
}

const LoginView: React.FC<IProps> = ({ validation }) => {
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("navy.500", "white");

  return (
    <AuthLayout>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'
      >
        <Box me='auto'>
          <Heading fontSize='36px' mb='10px'>
            Entrar
          </Heading>
          <Text mb='36px' ms='4px' fontWeight='400' fontSize='md'>
            Insira seu e-mail e senha para acessar!
          </Text>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}
        >
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              validation.handleSubmit(e);
            }}
          >
            <Stack spacing='6'>
              <Stack spacing='5'>
                <FormControl>
                  <InputComponent
                    hasFloatingLabel
                    inputLabel='Email'
                    inputIdentifier='email'
                    isRequired
                    handleBlur={validation.handleBlur}
                    handleChange={validation.handleChange}
                    inputValue={validation.values.email}
                    isInvalid={
                      !!(validation.errors.email && validation.touched.email)
                    }
                    inputErrorMessage={validation.errors.email}
                  />
                </FormControl>
                <PasswordInput
                  hasFloatingLabel
                  inputValue={validation.values.password}
                  handleChange={validation.handleChange}
                  handleBlur={validation.handleBlur}
                  isRequired
                  inputIdentifier={"password"}
                  isInvalid={
                    !!(
                      validation.errors.password && validation.touched.password
                    )
                  }
                  inputErrorMessage={validation.errors.password}
                />
              </Stack>
              <HStack justify='space-between'>
                <Checkbox
                  name='remember'
                  isChecked={validation.values.remember}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                >
                  Lembrar de mim
                </Checkbox>
              </HStack>
              <Stack spacing='6'>
                <Button type={"submit"} colorScheme={"navy"}>
                  Entrar
                </Button>
              </Stack>
            </Stack>
          </form>
          <Flex
            flexDirection='row'
            justifyContent='space-between'
            alignItems='start'
            maxW='100%'
            mt='10px'
          >
            <NavLink to='#'>
              <Text
                color={textColorDetails}
                as='span'
                size={"sm"}
                fontWeight='400'
                fontSize='14px'
              >
                Esqueceu a senha?
              </Text>
            </NavLink>
            <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
              Não possui conta?
              <NavLink to='/auth/cadastro'>
                <Text
                  color={textColorBrand}
                  as='span'
                  ms='5px'
                  fontWeight='500'
                >
                  Crie uma agora!
                </Text>
              </NavLink>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </AuthLayout>
  );
};

export default LoginView;
