import React from 'react'
import Api from "../components/api"
import Search from '../components/search'
import  { useState } from 'react';


const Home = () => {
    const [searchValue, setSearchValue] = useState('');


  return (
    <div className=' text-white flex h-full flex-col'>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}  />
      <Api searchValue={searchValue} setSearchValue={setSearchValue}   />
    </div>
  )
}

export default Home
