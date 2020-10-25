import { Box, Flex, Heading, Image, Text } from '@chakra-ui/core';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../Table';

export const LeftColumn = ({ title, description, location }) => {
  return (
    <Flex direction='column' h='100%'>
      <Flex align='baseline'>
        <Heading size='xl' as='h1' mr={4}>
          {title}
        </Heading>
        <Heading size='md' as='h2'>
          {location}
        </Heading>
      </Flex>
      <Box>
        <Text mt={2}>{description}</Text>
      </Box>
    </Flex>
  );
};

export const RightColumn = ({ image, dates }) => {
  return (
    <Flex direction='column' align='center' justify='space-around' h='100%'>
      <Image src={image} fallbackSrc='https://via.placeholder.com/400' mb={4} />
      <Table border='1px' mb={4}>
        <TableHead>
          <TableRow>
            <TableHeader>Date</TableHeader>
            <TableHeader>Time</TableHeader>
            <TableHeader>Price</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {dates?.map(date => (
            <TableRow key={date}>
              <TableCell>{date.split(' ')[0]}</TableCell>
              <TableCell>{date.split(' ')[1]}</TableCell>
              <TableCell>$200</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Flex>
  );
};
