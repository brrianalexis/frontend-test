import { Flex, Grid, Spinner } from '@chakra-ui/core';
import { EventCard } from '../EventCard';

export const EventsContainer = ({ events }) => {
  if (!events) {
    return (
      <Flex align='center' justify='center'>
        <Spinner size='xl' color='teal.500' />
      </Flex>
    );
  } else {
    return (
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        {events.map(({ dates, eventImage, id, title }) => (
          <EventCard
            dates={dates}
            eventImage={eventImage}
            id={id}
            title={title}
            key={id}
          />
        ))}
      </Grid>
    );
  }
};
