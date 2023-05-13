"use client"
import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react'

const page = async ({params}) => {

    const id = params.id

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fb9580a5b7msh61b55ac28fde44cp1a02d1jsncf4634343b32',
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
        },
      }      


      const res = await fetch(url,options)
  const data = await res.json()  
const maindata = data[0].details
    return (
    <Box>
        <Image src={maindata.backgroundImage.url} />
        <Text>{maindata.title}</Text>
        <Text>{maindata.synopsis}</Text>
    </Box>
  )
}

export default page
