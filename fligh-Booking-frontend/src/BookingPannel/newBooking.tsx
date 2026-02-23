import BookingForm from "../components/forms/bookingForm"
const newBooking = () => {
  return (
    <div className="w-full font-sans">
        <div className=" my-4">
          <h1 className='font-semibold text-3xl text-gray-800'>New Booking</h1>
          <p className='text-gray-700 text-lg leading-loose tracking-wider'>Fill in the details below to create a new booking</p>
        </div>
        <div>
            <BookingForm/>
        </div>
    </div>
  )
}

export default newBooking
