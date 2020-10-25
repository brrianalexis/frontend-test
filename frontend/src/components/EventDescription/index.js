import { Box, Flex, Heading, Image, Text } from '@chakra-ui/core';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../Table';

export const LeftColumn = () => {
  return (
    <Flex direction='column' h='100%'>
      <Flex align='baseline'>
        <Heading size='xl' as='h1' mr={4}>
          Event Name
        </Heading>
        <Heading size='md' as='h2'>
          Event Location
        </Heading>
      </Flex>
      <Box>
        <Text mt={2}>
          Donec consectetur, ligula id maximus convallis, lacus augue cursus
          leo, vitae porta mauris tortor non libero. Duis ultricies ante vel
          arcu suscipit, ut consectetur mi mattis. Pellentesque consequat
          interdum libero, ac rutrum purus congue ut. Nulla eu lorem quis ex
          interdum lobortis. Aliquam at mauris ex. Ut nisl lorem, bibendum ac
          sem vel, fermentum porta tortor. Vestibulum vulputate magna at
          porttitor laoreet. Nulla volutpat magna ut sapien aliquet, sit amet
          efficitur felis posuere. Aenean lorem magna, bibendum eu nisl vel,
          placerat ullamcorper nibh. Nam aliquam venenatis nunc. Nam consequat,
          orci vel egestas venenatis, nulla nunc sollicitudin lectus, a feugiat
          risus orci et ligula. Phasellus at viverra erat, sit amet ultricies
          lorem. Integer at est eget magna egestas vestibulum.
        </Text>
        <Text mt={2}>
          Nunc nec est quis dolor sodales euismod et non diam. Donec ligula
          nunc, efficitur vitae turpis et, suscipit bibendum ipsum. Nulla a
          finibus nibh. Praesent sagittis felis a tempus vehicula. Sed orci
          velit, molestie sit amet bibendum sed, scelerisque ac ante. Mauris
          blandit sem nisl, a porta lacus commodo in. Vestibulum dui nunc,
          aliquam sed luctus id, dictum vel sapien. Maecenas viverra interdum
          mauris, vestibulum sagittis leo. Proin eu sodales nunc. Integer congue
          orci in tempor maximus. Praesent luctus augue tellus, in dignissim
          mauris gravida sit amet. Maecenas quis ultricies ipsum, laoreet
          convallis risus.
        </Text>
        <Text mt={2}>
          Proin volutpat quis tortor porttitor condimentum. Maecenas ac enim
          magna. Ut convallis purus vel feugiat cursus. Aliquam erat volutpat.
          Nam quis libero elementum, sollicitudin quam ut, euismod elit. Donec
          maximus porta ipsum, ut suscipit risus ullamcorper tincidunt. Nullam
          dapibus diam vitae purus malesuada auctor. Fusce nec molestie eros.
          Maecenas pretium lacus mauris, nec pellentesque felis cursus eu.
          Suspendisse mollis massa vel mauris egestas, quis posuere neque
          luctus. Maecenas in egestas libero. Fusce tellus ante, mollis vitae
          augue id, viverra blandit mauris. Pellentesque commodo sapien ac
          aliquet hendrerit. Duis laoreet, justo eu mattis sagittis, sem erat
          consequat sapien, eget fermentum felis metus vitae justo. Pellentesque
          accumsan consequat felis non hendrerit.
        </Text>
      </Box>
    </Flex>
  );
};

export const RightColumn = () => {
  return (
    <Flex direction='column' align='center' justify='space-around' h='100%'>
      <Box>
        <Image fallbackSrc='https://via.placeholder.com/250' />
      </Box>
      <Table border='1px'>
        <TableHead>
          <TableRow>
            <TableHeader>Date</TableHeader>
            <TableHeader>Time</TableHeader>
            <TableHeader>Price</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>20 Jul</TableCell>
            <TableCell>19:30</TableCell>
            <TableCell>$200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>20 Jul</TableCell>
            <TableCell>19:30</TableCell>
            <TableCell>$200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>20 Jul</TableCell>
            <TableCell>19:30</TableCell>
            <TableCell>$200</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/*
        //TODO  table w/ date, time and price
       */}
    </Flex>
  );
};
