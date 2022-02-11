import { Flex, Icon, useBreakpointValue, IconButton } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SideBarDrawerContext';
import { Logo } from './Logo';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header(): JSX.Element {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
