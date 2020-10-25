import PropTypes from 'prop-types';
import { Flex, IconButton, Tooltip } from '@chakra-ui/core';

export const FixedButton = ({ icon, label }) => {
  return (
    <Flex
      position='fixed'
      justify='center'
      align='center'
      bottom={10}
      right={10}
    >
      <Tooltip
        position='fixed'
        bottom={5}
        right={5}
        mt={8}
        size='lg'
        label={label}
        placement='left'
      >
        <IconButton
          mb={2}
          bg='transparent'
          size='lg'
          aria-label={label}
          as={icon}
          isRound
        />
      </Tooltip>
    </Flex>
  );
};

FixedButton.propTypes = {
  icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
