import React from "react";
import { Link } from "react-router-dom";
import { Box, HStack, Stack, Flex, Text, Button, IconButton, useDisclosure, Container } from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';



const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Other",
    path: "/other",
  },
  {
    name: "Not Found",
    path: "/*",
  },
  
];
export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  
  return (
    <Box 
      as="header"
      w="100%"
      px="6"
      py="5"
      align="center"
      justify="space-between"
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        alignContent="center"
        justifyContent="space-between"
        fontFamily="primary"
        fontStyle="normal"
        fontWeight="300"
        fontSize="13.5"
      >

        <Text h="50px" display="inline-flex" alignItems="center">
          HGESF
        </Text>
        
        <HStack spacing={8} alignItems={"center"}>

          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
              
          {Links.map(({ name, path }) => (
              <Button>
                <Link key={path} to={path}>
                  {name}
                </Link>
              </Button>
            ))}
          </HStack>
              
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
          >
          <IconButton
            size={"md"}
            aria-label={"Toggle Navigation"}
            variant={'ghost'}
            display={{ md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5}/>}
            />
        

          {isOpen ? (
            <Box pb={4} ml={2} display={{ base:'inline-block', md: "none" }}>
                <Stack as={"nav"} spacing={4}>
                  {Links.map(({ name, path }) => (
                    <Button>
                        <Link key={path} to={path}>
                          {name}
                        </Link>
                      </Button>
                  ))}
                </Stack>
              </Box>
            ) : null}
          </Flex>
        </HStack>
      </Container>
        
      
    </Box>
  );
};

