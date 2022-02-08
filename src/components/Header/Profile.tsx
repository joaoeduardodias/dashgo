import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile(): JSX.Element {
  return (
    <Flex align="center">
      <Box>
        <Text>João Dias</Text>
        <Text color="gray.300" fontSize="small">
          joaoeduardodias123.gmail.com
        </Text>
      </Box>
      <Avatar
        ml="4"
        size="md"
        name="João Dias"
        src="https://github.com/joaoeduardodias.png"
      />
    </Flex>
  );
}
