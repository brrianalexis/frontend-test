import { Grid } from '@chakra-ui/core';
import { RiSave3Fill } from 'react-icons/ri';
import { LeftColumn, RightColumn } from '../components/EventDescription';
import { FixedButton } from '../components/FixedBRButton';

export const EventDetail = () => {
  return (
    <>
      <Grid templateColumns='70% 30%' minH='90vh' mx={4}>
        <LeftColumn />
        <RightColumn />
      </Grid>
      <FixedButton icon={RiSave3Fill} label='Save event' />
    </>
  );
};
