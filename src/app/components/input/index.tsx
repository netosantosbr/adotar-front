import { WarningIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

interface IProps extends InputProps {
  inputLabel: string;
  isInvalid?: boolean;
  isRequired: boolean;
  handleChange: () => void;
  handleBlur: () => void;
  hasFloatingLabel?: boolean;
  inputValue: string;
  inputErrorMessage?: string;
  inputIdentifier: string;
}

const InputComponent: React.FC<IProps> = ({
  inputLabel,
  isInvalid = false,
  inputErrorMessage,
  handleChange,
  handleBlur,
  inputValue,
  inputIdentifier,
  isRequired,
  hasFloatingLabel = false,
  ...rest
}) => {
  return (
    <FormControl
      isInvalid={isInvalid}
      variant={hasFloatingLabel ? "floating" : ""}
    >
      <FormLabel htmlFor={inputIdentifier}>{inputLabel}</FormLabel>
      <InputGroup>
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

export default InputComponent;
