import { Divider, Flex, Heading } from '@chakra-ui/core';
import { HighlightRow } from '../HighlightRow';

export const Highlights = () => {
  return (
    <Flex direction='column'>
      <Heading as='h2' size='md'>
        Today's Highlight
      </Heading>
      <Divider mt={2} />
      <HighlightRow />
      <HighlightRow />
      <HighlightRow />
      <HighlightRow />
    </Flex>
  );
};
