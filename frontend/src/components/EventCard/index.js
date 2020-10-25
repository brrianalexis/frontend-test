import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
  Tooltip,
} from '@chakra-ui/core';
import { Link as RRDLink } from 'react-router-dom';
import { RiEyeFill, RiShareFill } from 'react-icons/ri';
import { tweetUrl } from '../../utils/tweetUrl';

const ShareButton = ({ title, date }) => {
  return (
    <Link isExternal href={tweetUrl(title, date)} fontSize='40px'>
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

export const EventCard = () => {
  return (
    <Box borderWidth='1px' rounded='lg' p={4}>
      <Flex align='center' justify='space-between'>
        <Text fontSize='lg'>Some Date</Text>
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
            as={() => <ShareButton title='asd' date='tomorrow' />}
            isRound
          />
        </Tooltip>
      </Flex>
      <Flex justify='center' my={2}>
        <Image
          rounded='lg'
          src='https://via.placeholder.com/500'
          alt='segun adebayo'
          fallbackSrc='https://via.placeholder.com/500'
        />
      </Flex>
      <Heading as='h2' size='md'>
        Event Name
      </Heading>
      <Divider my={2} />
      <ViewButton id={1} />
    </Box>
  );
};
