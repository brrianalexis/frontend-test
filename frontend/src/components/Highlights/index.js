import { Divider, Flex, Heading, Spinner, Text } from '@chakra-ui/core';
import { HighlightRow } from '../HighlightRow';
import { Emoji } from '../Emoji';
import { isToday } from '../../utils/dates';

export const Highlights = ({ events }) => {
  const filteredEvents = events?.filter(event =>
    event.dates.some(date => isToday('07/28/2015', date))
  );

  const eventsToday = filteredEvents?.length !== 0;

  return (
    <Flex direction='column'>
      <Heading as='h2' size='md'>
        Today's Highlight
      </Heading>
      <Divider mt={2} />
      {!events ? (
        <Flex align='center' justify='center' mt={8}>
          <Spinner size='xl' color='teal.500' />
        </Flex>
      ) : events && !eventsToday ? (
        <Text mt={4}>
          There are no events today <Emoji name='sad'>😥</Emoji>
        </Text>
      ) : (
        filteredEvents.map(
          ({ id, title, dates, location, description, eventImage }) => (
            <HighlightRow
              key={id}
              title={title}
              dates={dates}
              location={location}
              description={description}
              eventImage={eventImage}
            />
          )
        )
      )}
    </Flex>
  );
};
