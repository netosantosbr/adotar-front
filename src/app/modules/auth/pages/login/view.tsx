import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Logo from "../../components/logo";
import { PasswordInput } from "../../components/passswordInput";
import { Link } from "react-router-dom";

interface IProps {}

const LoginView: React.FC<IProps> = ({}) => {
  return (
    <Container maxW='lg' py={{ base: "12" }} px={{ base: "0", sm: "8" }}>
      <Stack spacing={"1"}>
        <Stack spacing='6'>
          <Logo />
          <Stack spacing={{ base: "2", md: "3" }} textAlign='center'>
            <Heading size={{ base: "xs", md: "sm" }}>
              Realize o login com sua conta
            </Heading>
            <Text>
              Ainda não possui conta?{" "}
              <Link to='/auth/registro'>Cadastre-se</Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "xl" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing='6'>
            <Stack spacing='5'>
              <FormControl>
                <FormLabel htmlFor='email'>Email ou Usuário</FormLabel>
                <Input id='email' type='email' />
              </FormControl>
              <PasswordInput />
            </Stack>
            <HStack justify='space-between'>
              <Checkbox defaultChecked={false}>Lembrar de mim</Checkbox>
              <Button variant='text' size='sm'>
                Esqueceu a senha?
              </Button>
            </HStack>
            <Stack spacing='6'>
              <Button>Entrar</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginView;