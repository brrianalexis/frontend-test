import { Flex, Grid, Image, Text } from '@chakra-ui/core';

export const HighlightRow = () => {
  return (
    <Grid templateColumns='25% 50% 25%' my={2}>
      <Image fallbackSrc='https://via.placeholder.com/100' />
      <Flex direction='column' ml={2}>
        <Flex align='flex-start'>
          <Text mr={2}>Event Name</Text>
          <Text>Jul 20 @ 1930</Text>
        </Flex>
        <Flex align='flex-end' mt={4}>
          <Text>This is the event description</Text>
        </Flex>
      </Flex>
      <Flex align='flex-end'>
        <Text>Theatre X</Text>
      </Flex>
    </Grid>
  );
};
