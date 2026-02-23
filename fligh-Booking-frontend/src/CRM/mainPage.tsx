import { Routes, Route } from "react-router";
import Dashboard from '../Dashboard/page';
import Navbar from '../components/Navbar'
import UpperNav from '../components/UpperNav';

const mainPage = () => {
  return (
    <div className='  '>
      <UpperNav />
      <div className='flex  h-full bg-gray-100'>
        <div className='w-[300px]  border-r-2'>
          <Navbar />
        </div>
        <div className='px-5 pr-3 h-full overflow-auto w-10/12 p-2'>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default mainPage
