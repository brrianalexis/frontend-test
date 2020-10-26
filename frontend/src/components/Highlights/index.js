import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Divider, Flex, Heading, Spinner, Text } from '@chakra-ui/core';
import { HighlightRow } from '../HighlightRow';
import { Emoji } from '../Emoji';

export const Highlights = () => {
  const [highlights, setHighlights] = useState();

  useEffect(() => {
    (async function getHighlights() {
      const {
        data: { events },
      } = await Axios.get('http://localhost:8000/events/featured');
      setHighlights(events);
    })();
  }, []);

  return (
    <Flex direction='column'>
      <Heading as='h2' size='md'>
        Today's Highlight
      </Heading>
      <Divider mt={2} />
      {!highlights ? (
        <Flex align='center' justify='center' mt={8}>
          <Spinner size='xl' color='teal.500' />
        </Flex>
      ) : highlights?.length === 0 ? (
        <Text mt={4}>
          There are no highlights today <Emoji name='sad'>😥</Emoji>
        </Text>
      ) : (
        highlights.map(
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
