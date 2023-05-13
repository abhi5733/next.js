"use client"
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <Box>
        <Flex p={10} alignItems="center" justifyContent="space-between"  height="100px" border="1px solid  black"  ><Image src="/logo.png" width={150} height={40}  alt="/logo.png" />
        
        <Flex  > <Link href="/">   <Text px={10} >Home</Text>  </Link> <Link href="/about" >  <Text px={10} >About</Text>  </Link> <Link href="/contact" >  <Text px={10} >Contact</Text> </Link>
        <Link href="/movie" >  <Text px={10} >Movies</Text> </Link>  </Flex>
        </Flex>
    </Box>
  )
}

export default Navbar
