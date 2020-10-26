import { Flex, Grid, Image, Text } from '@chakra-ui/core';

export const HighlightRow = ({
  title,
  dates,
  location,
  description,
  eventImage,
}) => {
  return dates.map(date => (
    <Grid templateRows='50% 50%' my={2} key={date}>
      <Flex justify='space-evenly'>
        <Image
          h='100px'
          src={eventImage}
          fallbackSrc='https://via.placeholder.com/100'
        />
        <Flex direction='column'>
          <Text ml={2}>{title}</Text>
          <Text ml={2}>{location}</Text>
        </Flex>
        <Text>{date.split(' ')[1]}</Text>
      </Flex>
      <Flex direction='column' align='flex-end'>
        <Flex align='flex-end' mt={4}>
          <Text>{description}</Text>
        </Flex>
      </Flex>
    </Grid>
  ));
};
