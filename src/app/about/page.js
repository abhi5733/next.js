"use client"

import React from 'react'
import { Box, ChakraProvider, Text } from '@chakra-ui/react'
const page = () => {
  return (
    <ChakraProvider > 
   <Box>
    <Text>hello chakra</Text>
   </Box>
    </ChakraProvider>
  )
}

export default page
