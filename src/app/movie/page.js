
import React from 'react'
import MovieCard from '../components/MovieCard';
const page = async () => {


  
      const url =
        'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fb9580a5b7msh61b55ac28fde44cp1a02d1jsncf4634343b32',
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
        },
      }      


      const res = await fetch(url,options)
  const data = await res.json()  
const maindata = data.titles

  return (
    <div>

<h1>movies</h1>      

{ maindata.length>0 &&  maindata.map((el)=>{
  return <MovieCard  key = {el.id} {...el} />
// console.log("hello")
})}

    </div>
  )
}

export default page
