import { SimpleGrid, Container } from "@chakra-ui/react";
import React from "react";
import { Card } from "./Card";
import CardData from "./CardData"


export const Cardbar = () => {
  
  return (
    <Container 
    maxW="container.lg"
    padding="50px"
    height="100%"
    flexWrap="wrap"
    alignContent="center"
    mx={{base:0, md:45, lg:85}} mt={40} 
    >

      <SimpleGrid spacing ={0} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {CardData.map((data) => (
          <Card 
          title={data.title} 
          icon={data.icon} 
          />
          ))}
      </SimpleGrid>
    </Container>
  );
};

