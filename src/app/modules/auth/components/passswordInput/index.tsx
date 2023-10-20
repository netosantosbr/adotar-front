import { WarningIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface IProps extends InputProps {
  inputLabel?: string;
  inputName?: string;
  isInvalid?: boolean;
  isRequired: boolean;
  handleChange: () => void;
  handleBlur: () => void;
  inputValue: string;
  inputErrorMessage?: string;
  inputIdentifier: string;
}

export const PasswordInput: React.FC<IProps> = ({
  inputLabel = "Senha",
  inputName = "password",
  isInvalid,
  isRequired,
  handleChange,
  handleBlur,
  inputValue,
  inputErrorMessage,
  inputIdentifier,
  ...rest
}) => {
  const { isOpen, onToggle } = useDisclosure();

  const onClickReveal = useCallback(() => {
    onToggle();
  }, [isOpen]);

  return (
    <FormControl isInvalid>
      <FormLabel htmlFor={inputIdentifier}>{inputLabel}</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant='text'
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
            mr={isInvalid ? "12" : ""}
          />
        </InputRightElement>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          name={inputIdentifier}
          id={inputIdentifier}
          value={inputValue}
          type='text'
          {...rest}
        />
        {isInvalid && isRequired && (
          <InputRightElement>
            <WarningIcon color='red.600' />
          </InputRightElement>
        )}
      </InputGroup>
      {isInvalid && isRequired && (
        <FormErrorMessage>{inputErrorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};

PasswordInput.displayName = "PasswordInput";
