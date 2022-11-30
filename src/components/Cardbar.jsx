import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Card } from "./Card";
import CardData from "./CardData"


export const Cardbar = () => {
  
  return (
    <SimpleGrid margin={5} mt={40} spacing ={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {CardData.map((data) => (
            <Card 
            title={data.title} 
            icon={data.icon} 
            />
          ))}
    </SimpleGrid>
  );
};

