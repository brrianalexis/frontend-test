import { useState } from 'react';
import Axios from 'axios';
import { Grid } from '@chakra-ui/core';
import { RiSave3Fill } from 'react-icons/ri';
import { LeftColumn, RightColumn } from '../components/AddEvent';
import { FixedButton } from '../components/FixedBRButton';

export const NewEvent = () => {
  const [newEvent, setNewEvent] = useState({
    id: '',
    title: '',
    eventImage: '',
    description: '',
    location: '',
    date: '',
    time: '',
    price: '',
  });

  const handleChange = e => {
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const eventCopy = newEvent;
    eventCopy.dates = [[eventCopy.date, eventCopy.time].join(' ')];
    try {
      await Axios.post('http://localhost:8000/events', eventCopy);
    } catch (err) {
      console.log('handleSubmit -> err', err);
    }
  };

  return (
    <>
      <Grid templateColumns='60% 40%' minH='80vh' mx={4}>
        <LeftColumn values={newEvent} handleChange={handleChange} />
        <RightColumn values={newEvent} handleChange={handleChange} />
      </Grid>
      <FixedButton
        icon={RiSave3Fill}
        label='Save event'
        onClick={handleSubmit}
      />
    </>
  );
};
