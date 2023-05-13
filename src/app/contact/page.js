"use client"

import { Box, Button, FormLabel, VStack ,Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const page = () => {
  const initialState = {name:"",email:""}
const[value,setValue] = useState(initialState)


useEffect(  ()=>{

 const find =  async ()=>{

  await fetch('/api/contact', {
    method:'GET'
}).then((res)=>res.json()).then((res)=>console.log(res))
  }

  find()
},[])


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
         await fetch('/api/contact', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({
                name:value.name,
                email:value.email
            })
        }).then((res)=>console.log(res))
        
        // Set the status based on the response from the API route

        setValue(initialState)

    }catch (e){
        console.log(e)
    }

    // setValue(initialState)

}



  const handleChange=(e)=>{
    setValue({...value,[e.target.name]:e.target.value})
  
  }

  return (
  <Box>

<VStack as="form" onSubmit={handleSubmit}  >
<FormLabel>Name</FormLabel>
<Input value={value.name} type="text" onChange={handleChange} name="name"  />

<FormLabel>Email</FormLabel>
<Input value={value.email} type="email" onChange={handleChange} name="email" />

  <Button type="submit" >Submit</Button>

</VStack>

  </Box>
  )
}

export default page
