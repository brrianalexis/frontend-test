import { Flex, Heading } from '@chakra-ui/core';
import { useLocation } from 'react-router-dom';
import { Emoji } from '../components/Emoji';

export const Unexistent = () => {
  const { pathname } = useLocation();

  return (
    <Flex align='center' justify='center'>
      <Heading as='h2' size='md'>
        The page {pathname} doesn't exist <Emoji label='sad'>😥</Emoji>
      </Heading>
    </Flex>
  );
};
