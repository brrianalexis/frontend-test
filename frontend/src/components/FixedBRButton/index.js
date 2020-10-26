import { Flex, IconButton, Link } from '@chakra-ui/core';
import { Link as RRDLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const FixedButton = ({ icon, isLink, label, onClick }) => {
  const Button = () => (
    <IconButton
      mb={2}
      bg='transparent'
      size='lg'
      aria-label={label}
      as={icon}
      isRound
      onClick={onClick}
      cursor='pointer'
    />
  );

  return (
    <Flex
      position='fixed'
      justify='center'
      align='center'
      bottom={10}
      right={10}
    >
      {isLink ? (
        <Link as={RRDLink} to='/add'>
          <Button />
        </Link>
      ) : (
        <Button />
      )}
    </Flex>
  );
};

FixedButton.propTypes = {
  icon: PropTypes.func.isRequired,
  isLink: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
