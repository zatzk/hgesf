import { Flex, Box,  } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const boxCardVariants = {
  initial: {
    opacity: 1
  },
  hover: {
    opacity: 1,
    scale: 1.02,
    y: -10,
    borderRadius: "5px",
  },
  
}

export const Card = ({...props}) => {

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap="hover"
      variants={boxCardVariants}
      transition={{
        ease: 'easeOut',
        delay: 0.15,
      }}
  >
    <Flex
      border="2px"
      borderColor="blue"
      margin= "0.9rem"
      padding= "20px"
      width= "9.5rem"
      height= "8.5rem"
      borderRadius="0.7rem"
      borderStyle="solid"
      cursor="pointer"
      bgClip="padding-box"
      display="inline-block"
      justifyContent="center"
    >
      <Flex
        justifyContent="center"
        alignItems={"center"}
        height={10}
      >
      {props.icon}
      </Flex>
      
      <Flex
        justifyContent="center"
        alignItems={"center"}
        height={10}
      >
      {props.title}

      </Flex>
    </Flex>
  </motion.div>
  );
}