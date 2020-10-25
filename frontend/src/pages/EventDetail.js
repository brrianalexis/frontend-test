import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { Flex, Grid, Spinner } from '@chakra-ui/core';
import { RiSave3Fill } from 'react-icons/ri';
import { LeftColumn, RightColumn } from '../components/EventDescription';
import { FixedButton } from '../components/FixedBRButton';

export const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function getEvent() {
      const {
        data: { event: eventById },
      } = await Axios.get(`http://localhost:8000/events/${id}`);
      setEvent(eventById);
      setLoading(false);
    })();
  }, [id]);

  return (
    <>
      {loading ? (
        <Flex align='center' justify='center' h='70vh'>
          <Spinner size='xl' color='teal.500' />
        </Flex>
      ) : (
        <Grid templateColumns='70% 30%' minH='80vh' mx={4}>
          <LeftColumn
            title={event.title}
            description={event.description}
            location={event.location}
          />
          <RightColumn image={event.eventImage} dates={event.dates} />
        </Grid>
      )}
      <FixedButton icon={RiSave3Fill} label='Save event' />
    </>
  );
};
