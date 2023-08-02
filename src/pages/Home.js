import React from 'react';
import Api from "../components/api"
import Search from '../components/search'
import  { useState } from 'react';
import Login from "../components/login"


const Home = (props) => {
    const [searchValue, setSearchValue] = useState('');
    
    


  return (
    <div className=' text-white flex h-full flex-col'>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}  />
      <Api searchValue={searchValue} setSearchValue={setSearchValue}   />
      <Login/>
    </div>
  )
}

export default Home
