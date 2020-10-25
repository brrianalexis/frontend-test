import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Grid } from '@chakra-ui/core';
import { RiAddCircleFill } from 'react-icons/ri';
import { EventsContainer } from '../components/EventsContainer';
import { Highlights } from '../components/Highlights';
import { FixedButton } from '../components/FixedBRButton';

export const Home = () => {
  const [events, setEvents] = useState();

  useEffect(() => {
    (async function getEvents() {
      const {
        data: { events: eventsArr },
      } = await Axios.get('http://localhost:8000/events');
      setEvents(eventsArr);
    })();
  }, []);

  return (
    <>
      <Grid templateColumns='65% 30%' gap={6} ml={4}>
        <EventsContainer events={events} />
        <Highlights events={events} />
      </Grid>
      <FixedButton icon={RiAddCircleFill} isLink label='Add event' />
    </>
  );
};
