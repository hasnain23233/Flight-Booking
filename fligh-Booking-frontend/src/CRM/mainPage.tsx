import { Routes, Route } from "react-router";
import Dashboard from '../Dashboard/page';
import Navbar from '../components/Navbar'
import UpperNav from '../components/UpperNav';
import NewBooking from "../BookingPannel/newBooking";
import Approvals from "../BookingPannel/approvals";
import PaddingBooking from "../BookingPannel/paddingBooking";
import Issued from '../BookingPannel/Issued'
import ClearIssued from "../BookingPannel/clearIssued";
import Cancel from '../BookingPannel/cancelled'
import SearchBooking from "../BookingPannel/SearchBooking";

const mainPage = () => {
  return (
    <div className=''>
      <UpperNav />
      <div className='flex  h-screen overflow-hidden pt-16 bg-gray-100'>
        <div className='w-[300px]  border-r-2'>
          <Navbar />
        </div>
        <div className='px-5 overflow-y-auto pr-3 w-11/12 p-2'>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/booking-panel/new-booking" element={<NewBooking />} />
            <Route path="/booking-panel/approvals" element={<Approvals />} />
            <Route path="/booking-panel/pending" element={<PaddingBooking />} />
            <Route path="/booking-panel/issued-uncleared" element={<Issued />} />
            <Route path="/booking-panel/issued-cleared" element={<ClearIssued />} />
            <Route path="/booking-panel/cancelled" element={<Cancel />} />
            <Route path="/booking-panel/search" element={<SearchBooking />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default mainPage
