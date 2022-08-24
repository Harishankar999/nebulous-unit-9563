import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const Links = [
  "Why Harvest?",
  "Features",
  "Customers",
  "Integrations",
  "Price",
];

export default function Simple() {
  const navigate = useNavigate();
  const goto = (link) => {
    navigate(link);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("#fff8f1", "gray.900")}
        px={4}
        marginBottom="40px"
        position={"sticky"}
      >
        <Flex
          className="media"
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack
            spacing={8}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Box className="text" cursor={"pointer"}>
              <Text color={"#fa5d00"} fontSize="5xl">
                Harvest
              </Text>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Tabs variant={"enclosed"}>
                <TabList>
                  <Tab onClick={() => goto("")}>{Links[0]}</Tab>
                  <Tab onClick={() => goto("")}>{Links[1]}</Tab>
                  <Tab onClick={() => goto("")}>{Links[2]}</Tab>
                  <Tab onClick={() => goto("")}>{Links[3]}</Tab>
                  <Tab onClick={() => goto("")}>{Links[4]}</Tab>
                </TabList>
              </Tabs>
            </HStack>
          </HStack>
          <HStack>
            <Link>Signup</Link>
            <Button
              color={"white"}
              width={"200px"}
              borderRadius={"15"}
              size={"md"}
              bg={"#fa5d00"}
            >
              Try Harvest Free
            </Button>
          </HStack>
          <IconButton
            size={"lg"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}

              <RouterLink to="">{Links[0]}</RouterLink>
              <RouterLink to={""}>{Links[1]}</RouterLink>
              <RouterLink to={""}>{Links[2]}</RouterLink>
              <RouterLink to={""}>{Links[3]}</RouterLink>
              <RouterLink to={""}>{Links[4]}</RouterLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
