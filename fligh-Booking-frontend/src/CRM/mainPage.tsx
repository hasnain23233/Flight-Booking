import React from 'react'
import { Routes, Route } from "react-router";
import Dashboard from '../Dashboard/page';
import Navbar from '../components/Navbar'
import UpperNav from '../components/UpperNav';

const mainPage = () => {
  return (
    <>
      <UpperNav />
      <div className='flex  h-screen'>
        <div className='w-2.5/12  border-r-2'>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default mainPage
