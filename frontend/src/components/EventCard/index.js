import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Spinner,
  Text,
  Tooltip,
} from '@chakra-ui/core';
import { Link as RRDLink } from 'react-router-dom';
import { RiEyeFill, RiShareFill } from 'react-icons/ri';
import { tweetUrl } from '../../utils/tweetUrl';

const ShareButton = ({ title, date }) => {
  return (
    <Link
      isExternal
      href={tweetUrl(title, date)}
      fontSize='40px'
      textDecor='none'
    >
      <RiShareFill />
    </Link>
  );
};

const ViewButton = ({ id }) => {
  return (
    <Link as={RRDLink} to={`/event/${id}`}>
      <Button leftIcon={<RiEyeFill />} variant='outline'>
        View
      </Button>
    </Link>
  );
};

export const EventCard = ({ dates, eventImage, id, title }) => {
  if (!dates) {
    return <Spinner size='xl' color='teal.500' />;
  } else {
    return dates.map(date => (
      <Box borderWidth='1px' rounded='lg' p={4} key={`${id} - ${date}`}>
        <Flex align='center' justify='space-between'>
          <Text fontSize='lg'>{date}</Text>
          <Tooltip
            shouldWrapChildren
            hasArrow
            size='lg'
            label='🐤 Tweet this event'
            placement='bottom'
          >
            <IconButton
              bg='transparent'
              size='lg'
              aria-label='Share this event on twitter'
              as={() => <ShareButton title={title} date={date} />}
              isRound
            />
          </Tooltip>
        </Flex>
        <Flex justify='center' my={2}>
          <Image
            rounded='lg'
            src={eventImage}
            alt={title}
            fallbackSrc='https://via.placeholder.com/450'
          />
        </Flex>
        <Heading as='h2' size='md'>
          {title}
        </Heading>
        <Divider my={2} />
        <ViewButton id={id} />
      </Box>
    ));
  }
};
