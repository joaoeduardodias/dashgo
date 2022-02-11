import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProdileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProdileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>João Dias</Text>
          <Text color="gray.300" fontSize="small">
            joaoeduardodias123@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="João Dias"
        src="https://github.com/joaoeduardodias.png"
      />
    </Flex>
  );
}
