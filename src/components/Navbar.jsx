import React from "react";
import { Link } from "react-router-dom";
import { Box, HStack, Stack, Flex, Text, Button, IconButton, useDisclosure, Container } from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import { Logo } from "./Logo";


const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Other",
    path: "/other",
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
        maxW="container.xl"
        alignContent="center"
        justifyContent="space-between"
        fontFamily="primary"
        fontStyle="normal"
        fontWeight="300"
        fontSize="13.5"
      >

        <Text h="50px" display="inline-flex" alignItems="center">
          <Logo/>
        </Text>
        
        <HStack spacing={8} alignItems={"center"}>

          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
              
          {Links.map(({ name, path }) => (
              <Link key={name.toString()} to={path}>
                <Button>
                  {name}
                </Button>
              </Link>
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
        
          </Flex>
        </HStack>
      </Container>
      
      {isOpen ? (
            <Box pb={4} ml={2} justifyContent="end" display={{ base:'flex', md: "none" }}>
                <Stack as={"nav"} spacing={4}>
                  {Links.map(({ name, path }) => (
                    <Button>
                        <Link key={name.toString()} to={path}>
                          {name}
                        </Link>
                      </Button>
                  ))}
                </Stack>
              </Box>
            ) : null}
    </Box>
  );
};

