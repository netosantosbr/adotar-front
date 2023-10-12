import React from "react";
import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface IProps extends InputProps {
  inputLabel?: string;
  inputName?: string;
}

export const PasswordInput: React.FC<IProps> = ({
  inputLabel = "Senha",
  inputName = "password",
  ...props
}) => {
  const { isOpen, onToggle } = useDisclosure();

  const onClickReveal = () => {
    onToggle();
  };

  return (
    <FormControl>
      <FormLabel htmlFor='password'>{inputLabel}</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant='text'
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id={inputName}
          name={inputName}
          type={isOpen ? "text" : "password"}
          autoComplete='current-password'
          {...props}
        />
      </InputGroup>
    </FormControl>
  );
};

PasswordInput.displayName = "PasswordInput";
