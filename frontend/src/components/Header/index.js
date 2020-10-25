import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Link,
  useColorMode,
} from '@chakra-ui/core';
import { Link as RRDLink } from 'react-router-dom';
import { RiArrowLeftCircleFill } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { Emoji } from '../Emoji';

const GoBackButton = () => {
  return (
    <Link as={RRDLink} to='/'>
      <IconButton as={RiArrowLeftCircleFill} isRound />
    </Link>
  );
};

export const Header = ({ isHome }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        as='nav'
        align='center'
        justify='space-between'
        padding='1rem'
        wrap='wrap'
      >
        <Flex align='center'>
          {!isHome ? <GoBackButton /> : null}
          <Heading as='h1' size='lg' mr={8} ml={!isHome ? 4 : null}>
            Events
          </Heading>
        </Flex>
        <Box>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? (
              <Emoji name='moon'>🌚</Emoji>
            ) : (
              <Emoji name='sun'>🌞</Emoji>
            )}
          </Button>
        </Box>
      </Flex>
      <Divider mb={6} />
    </>
  );
};

Header.propTypes = {
  isHome: PropTypes.bool,
};
