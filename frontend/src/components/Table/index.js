import { Box } from '@chakra-ui/core';

export const TableHead = props => <Box as='thead' {...props} />;

export const TableRow = props => <Box as='tr' {...props} />;

export const TableHeader = props => (
  <Box
    as='th'
    px={6}
    py={3}
    borderBottomWidth='1px'
    textAlign='left'
    fontSize='xs'
    textTransform='uppercase'
    letterSpacing='wider'
    lineHeight='1rem'
    fontWeight='medium'
    {...props}
  />
);

export const TableBody = props => <Box as='tbody' {...props} />;

export const TableCell = props => (
  <Box
    as='td'
    px={6}
    py={4}
    lineHeight='1.25rem'
    whiteSpace='nowrap'
    {...props}
  />
);

export const Table = props => {
  return (
    <Box rounded='lg' overflow='hidden'>
      <Box as='table' width='full' {...props} />
    </Box>
  );
};
