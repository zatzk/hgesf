import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Card } from "./Card";



export const Cardbar = () => {
  
  return (
    <SimpleGrid spacing ={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <Card/>
    </SimpleGrid>
  );
};

