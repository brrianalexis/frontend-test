import { Flex, FormControl, FormLabel, Textarea } from '@chakra-ui/core';
import {
  RiCalendarEventFill,
  RiImageAddFill,
  RiMapPinAddFill,
  RiMoneyDollarCircleFill,
  RiMusic2Fill,
  RiTimeFill,
} from 'react-icons/ri';
import { Input } from '../Input';

export const LeftColumn = () => {
  return (
    <Flex direction='column' h='70%'>
      <FormControl isRequired>
        <FormLabel htmlFor='event-name'>Name</FormLabel>
        <Input
          id='event-name'
          name='name'
          size='lg'
          groupWidth='100%'
          placeholder='24 Festival de Cine para Niños y Jóvenes – Divercine'
          label='Enter the name of the event'
          leftIcon={<RiMusic2Fill />}
          hasRightIcon
        />
      </FormControl>
      <FormControl isRequired h='100%'>
        <FormLabel mt={4} htmlFor='event-description'>
          Description
        </FormLabel>
        <Textarea
          id='event-description'
          name='description'
          placeholder='Del lunes 27 de julio al sábado 1º de agosto se desarrolla en el Auditorio del SODRE Nelly Goitiño (18 de Julio y Rio Branco) el 24 Festival de Cine para Niños y Jóvenes - Divercine. La programación, que incluye películas de largo, medio y cortometraje de varias partes del mundo, está dividida en tres franjas de horarios cada día, de acuerdo a las edades del público a las que van dirigidas: a las 13 horas a partir de 3 años de edad; a las 14 horas a partir de los 6 años de edad; y desde las 15 se programan los medio y largometrajes para niños más grandes y adolescentes.'
          size='lg'
          h='100%'
        />
      </FormControl>
    </Flex>
  );
};

export const RightColumn = () => {
  return (
    <Flex direction='column' align='center' h='70%'>
      {/*
        //TODO add a preview of the chosen image? 🤔
      */}
      <FormControl isRequired w='90%'>
        <FormLabel htmlFor='event-image'>Image</FormLabel>
        <Input
          id='event-image'
          name='image'
          groupWidth='100%'
          size='lg'
          placeholder='https://via.placeholder.com/250'
          label='Enter the URL of an image depicting the event'
          leftIcon={<RiImageAddFill />}
          hasRightIcon
          mb={4}
        />
      </FormControl>
      <FormControl isRequired w='90%'>
        <FormLabel htmlFor='event-location'>Location</FormLabel>
        <Input
          id='event-location'
          name='location'
          groupWidth='100%'
          size='lg'
          placeholder='Auditorio del SODRE'
          label='Enter the URL of an image depicting the event'
          leftIcon={<RiMapPinAddFill />}
          hasRightIcon
        />
      </FormControl>
      <Flex justify='space-around' mt={4} w='90%'>
        <FormControl isRequired w='30%'>
          <FormLabel htmlFor='date'>Date</FormLabel>
          <Input
            id='date'
            name='date'
            groupWidth='100%'
            size='lg'
            placeholder='20 Jul'
            label='Enter the date of the event'
            leftIcon={<RiCalendarEventFill />}
          />
        </FormControl>
        <FormControl isRequired w='30%'>
          <FormLabel htmlFor='time'>Time</FormLabel>
          <Input
            id='time'
            name='time'
            groupWidth='100%'
            size='lg'
            placeholder='19:30'
            label='Enter the time of the event'
            leftIcon={<RiTimeFill />}
          />
        </FormControl>
        <FormControl isRequired w='30%'>
          <FormLabel htmlFor='price'>Price</FormLabel>
          <Input
            id='price'
            name='price'
            groupWidth='100%'
            size='lg'
            placeholder='$200'
            label='Enter the price of the event'
            leftIcon={<RiMoneyDollarCircleFill />}
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};
