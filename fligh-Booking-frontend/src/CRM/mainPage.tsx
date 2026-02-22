import React from 'react'
import { Routes, Route } from "react-router";
import Dashboard from '../Dashboard/page';
import Navbar from '../components/Navbar'
import UpperNav from '../components/UpperNav';

const mainPage = () => {
  return (
    <>
      <UpperNav />
      <div className='flex'>
        <div className='w-2/12 border'>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default mainPage
