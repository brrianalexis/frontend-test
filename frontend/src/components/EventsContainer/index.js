import { Grid } from '@chakra-ui/core';
import { EventCard } from '../EventCard';

export const EventsContainer = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </Grid>
  );
};
