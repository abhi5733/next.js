"use client"

import { Box, Button, Image , Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const MovieCard = (el) => {

    const {id,type,title,synopsis} = el.jawSummary

    return (
    <Box>
   <Image src={el.jawSummary.backgroundImage.url} alt={title}    />
   <Text>{title}</Text> 
   <Text>{synopsis}</Text>
   <Link href={`/movie/${id}`} >
    <Button>
        Read More
    </Button>
   </Link>

    </Box>
      )
}

export default MovieCard
