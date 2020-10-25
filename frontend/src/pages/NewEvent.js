import { Grid } from '@chakra-ui/core';
import { RiSave3Fill } from 'react-icons/ri';
import { LeftColumn, RightColumn } from '../components/AddEvent';
import { FixedButton } from '../components/FixedBRButton';

export const NewEvent = () => {
  return (
    <>
      <form>
        <Grid templateColumns='60% 40%' minH='80vh' mx={4}>
          <LeftColumn />
          <RightColumn />
        </Grid>
      </form>
      <FixedButton icon={RiSave3Fill} label='Save event' />
    </>
  );
};
