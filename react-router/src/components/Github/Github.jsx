import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // const [data , setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/SumitMangrati')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // } ,[])

    const data = useLoaderData()
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white
    p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="" />
    </div>
    
  )
}

export default Github

export const githubFetch = async () => {
    const response = await fetch('https://api.github.com/users/SumitMangrati')
    return response.json()
}