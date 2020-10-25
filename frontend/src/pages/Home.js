import { Grid } from '@chakra-ui/core';
import { RiAddCircleFill } from 'react-icons/ri';
import { EventsContainer } from '../components/EventsContainer';
import { Highlights } from '../components/Highlights';
import { FixedButton } from '../components/FixedBRButton';

export const Home = () => {
  return (
    <>
      <Grid templateColumns='65% 30%' gap={6} ml={4}>
        <EventsContainer />
        <Highlights />
      </Grid>
      <FixedButton icon={RiAddCircleFill} label='Add event' />
    </>
  );
};
