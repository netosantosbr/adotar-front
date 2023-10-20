import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PasswordInput } from "../../components/passswordInput";
import { FormikValues } from "formik";
import AuthLayout from "../../../../layout/auth/AuthLayout";

interface IProps {
  validation: FormikValues;
}

const LoginView: React.FC<IProps> = ({ validation }) => {
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
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input
                    id='email'
                    type='text'
                    value={validation.values.email}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                  />
                </FormControl>
                <PasswordInput
                  value={validation.values.password}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                />
              </Stack>
              <HStack justify='space-between'>
                <Checkbox defaultChecked={false}>Lembrar de mim</Checkbox>
                <Button variant='text' size='sm'>
                  Esqueceu a senha?
                </Button>
              </HStack>
              <Stack spacing='6'>
                <Button type={"submit"} colorScheme={"navy"}>
                  Entrar
                </Button>
              </Stack>
            </Stack>
          </form>
        </Flex>
      </Flex>
    </AuthLayout>
  );
};

export default LoginView;
