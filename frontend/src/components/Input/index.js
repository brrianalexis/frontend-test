import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/core';
import { RiCheckDoubleFill, RiCloseFill } from 'react-icons/ri';
import PropTypes from 'prop-types';

export const Input = ({
  groupWidth,
  groupXMargin,
  size,
  leftIcon,
  name,
  placeholder,
  label,
  hasRightIcon,
  inputIsValid,
  ...inputProps
}) => {
  return (
    <InputGroup w={groupWidth} mx={groupXMargin}>
      <InputLeftElement children={leftIcon} px={0} pt={2} />
      <ChakraInput
        {...inputProps}
        name={name}
        size={size}
        placeholder={placeholder}
        aria-label={label}
        type='text'
      />
      <InputRightElement
        children={
          hasRightIcon ? (
            inputIsValid ? (
              <RiCheckDoubleFill />
            ) : (
              <RiCloseFill />
            )
          ) : null
        }
        px={0}
        pt={2}
        color={inputIsValid ? 'green.500' : 'red.500'}
      />
    </InputGroup>
  );
};

Input.propTypes = {
  groupWidth: PropTypes.string.isRequired,
  groupXMargin: PropTypes.number,
  size: PropTypes.string,
  leftIcon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hasRightIcon: PropTypes.bool,
  inputIsValid: PropTypes.bool.isRequired,
};
