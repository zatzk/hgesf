import { Flex, Box, Link, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import styled from "@emotion/styled"




export const Logo = () => {
  const logoImg = '/hgesf-logo.png'
  return (
    
    <Link  href="/" scroll={false}>
      <a>
        <motion.button whileHover={{ scale: 1.2 }}>
          
          <Image 
            src={logoImg}
            width={25} 
            height={26}  
            alt="logo" 
            />
            
        </motion.button>
      </a>
    </Link>
  );
}