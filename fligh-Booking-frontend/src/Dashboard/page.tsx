import CircularGraph from '../components/graph/bookingGraph'
import RevenueGraph from '../components/graph/RevenueGraph'
import Attendence from './attendence'
import BookingsTable from '../components/tables/BookingsTable'
import RevenuTable from '../components/tables/RevenuTable'
import LeavesTable from '../components/tables/LeavesTable'


const page = () => {
  return (
    <div className='font-sans'>
      <div className='flex items-center justify-between mt-4'>
        <div>
          <h1 className='font-semibold text-3xl text-gray-800'>Hello, Amjad</h1>
          <p className='text-gray-700 text-lg leading-loose tracking-wider'>Your personal hub for Skysnap Travel & Tours</p>
        </div>
        <div className='space-x-4 font-bold'>
          <button className='bg-[#00B4ED] p-2 w-[100px] rounded-md text-white'>23:00:00</button>
          <button className='bg-gray-500 p-2 w-[100px] rounded-md text-white'>23:00:00</button>
          <button className='border-2 hover:bg-[#00B4ED] hover:text-white border-[#00B4ED] p-2 w-[100px] rounded-md text-[#00B4ED]'>Break</button>
          <button className='border-2 hover:bg-gray-500 hover:text-white border-gray-500 p-2 w-[100px] rounded-md text-gray-500'>Check Out</button>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-4 mt-4'>
        <div className='bg-white p-4 rounded-xl border-l-4 border-[#00B4ED]'>
          <p>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_34_93)">
                <path d="M5.46813 23.75C5.5425 23.4762 5.37813 23.0956 5.22125 22.8213C5.1724 22.7394 5.11942 22.6602 5.0625 22.5837C3.71704 20.5433 2.99991 18.1529 3 15.7087C2.97813 8.69312 8.79563 3 15.9894 3C22.2631 3 27.5 7.34625 28.7237 13.1156C28.9071 13.971 28.9997 14.8433 29 15.7181C29 22.7438 23.4069 28.5263 16.2131 28.5263C15.0694 28.5263 13.5256 28.2387 12.6838 28.0031C11.8419 27.7675 11.0013 27.455 10.7844 27.3713C10.5626 27.286 10.327 27.2421 10.0894 27.2419C9.82982 27.2409 9.57277 27.2926 9.33375 27.3937L5.09438 28.9237C5.0015 28.9638 4.90309 28.9895 4.8025 29C4.72312 28.9998 4.64458 28.9838 4.57143 28.953C4.49827 28.9222 4.43196 28.8771 4.37633 28.8205C4.3207 28.7639 4.27685 28.6968 4.24734 28.6231C4.21782 28.5494 4.20322 28.4706 4.20438 28.3913C4.20959 28.3216 4.22216 28.2527 4.24188 28.1856L5.46813 23.75Z" stroke="#00B4ED" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_34_93">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </p>
          <h1 className='text-5xl text-[#00B4ED] mt-4 font-bold'>0</h1>
          <p className='text-gray-700 font-semibold mt-4'>DAILY INQUIRIES</p>
          <p className='text-gray-600 text-lg'>Daily Bookings: <span className='text-[#00B4ED] text-2xl font-semibold'> 0rs</span></p>
        </div>
        <div className='bg-white p-4 rounded-xl border-l-4 border-[#00B4ED]'>
          <p>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 9H29V16" stroke="#00B4ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 23L10.5856 15.4144C10.7713 15.2286 10.9918 15.0812 11.2345 14.9807C11.4772 14.8802 11.7373 14.8284 12 14.8284C12.2627 14.8284 12.5228 14.8802 12.7655 14.9807C13.0082 15.0812 13.2287 15.2286 13.4144 15.4144L16.5856 18.5856C16.7713 18.7714 16.9918 18.9188 17.2345 19.0193C17.4772 19.1198 17.7373 19.1716 18 19.1716C18.2627 19.1716 18.5228 19.1198 18.7655 19.0193C19.0082 18.9188 19.2287 18.7714 19.4144 18.5856L28 10" stroke="#00B4ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </p>
          <h1 className='text-5xl text-[#00B4ED] mt-4 font-bold'>1</h1>
          <p className='text-gray-700 font-semibold mt-4'>MONTHLY INQUIRIES</p>
          <p className='text-gray-600 text-lg'>Monthly Bookings:  <span className='text-[#00B4ED] text-2xl font-semibold'> 0rs</span></p>
        </div>
        <div className='bg-white p-4 rounded-xl border-l-4 border-[#00B4ED]'>
          <p>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21L29 21C29.5523 21 30 20.5523 30 20L30 6C30 5.44771 29.5523 5 29 5L3 5C2.44772 5 2 5.44771 2 6L2 20C2 20.5523 2.44772 21 3 21Z" stroke="#00B4ED" stroke-width="2" stroke-linejoin="round" />
              <path d="M4 24H28M6 27H26" stroke="#00B4ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 18C18.7614 18 21 15.7614 21 13C21 10.2386 18.7614 8 16 8C13.2386 8 11 10.2386 11 13C11 15.7614 13.2386 18 16 18Z" stroke="#00B4ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30 10C28.6739 10 27.4021 9.47322 26.4645 8.53553C25.5268 7.59785 25 6.32608 25 5M2 10C2.65661 10 3.30679 9.87067 3.91342 9.6194C4.52005 9.36812 5.07124 8.99983 5.53553 8.53553C5.99983 8.07124 6.36812 7.52005 6.6194 6.91342C6.87067 6.30679 7 5.65661 7 5M30 16C28.6739 16 27.4021 16.5268 26.4645 17.4645C25.5268 18.4021 25 19.6739 25 21M2 16C2.65661 16 3.30679 16.1293 3.91342 16.3806C4.52005 16.6319 5.07124 17.0002 5.53553 17.4645C5.99983 17.9288 6.36812 18.48 6.6194 19.0866C6.87067 19.6932 7 20.3434 7 21" stroke="#00B4ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


          </p>
          <h1 className='text-5xl text-[#00B4ED] mt-4 font-bold'>£90</h1>
          <p className='text-gray-700 font-semibold mt-4'>REVENUE TODAY</p>
          <p className='text-gray-600 text-lg'>Monthly: <span className='text-[#00B4ED] text-2xl font-semibold'> 0rs</span></p>
        </div>
        <div className='bg-white p-4 rounded-xl border-l-4 border-[#00B4ED]'>
          <p>
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.025 12.7966L10.0023 11.7739C9.31874 11.0903 9.31874 9.98015 10.0023 9.29656L16.275 3.01843C16.9586 2.33484 18.0687 2.33484 18.7523 3.01843L19.775 4.04656C20.4586 4.73015 20.4586 5.84031 19.775 6.5239L13.5023 12.7966C12.8187 13.4802 11.7086 13.4802 11.025 12.7966ZM16.8437 15.9848L15.1266 14.2677L21.2516 8.14265L27.7812 14.6723L21.6562 20.7973L19.9391 19.0802L7.25155 31.7677C6.39843 32.6208 5.01483 32.6208 4.15624 31.7677C3.29765 30.9145 3.30311 29.5309 4.15624 28.6723L16.8437 15.9848ZM23.1273 24.8934C22.4437 24.2098 22.4437 23.0997 23.1273 22.4161L29.4 16.1434C30.0836 15.4598 31.1937 15.4598 31.8773 16.1434L32.9 17.1661C33.5836 17.8497 33.5836 18.9598 32.9 19.6434L26.6273 25.9216C25.9437 26.6052 24.8336 26.6052 24.15 25.9216L23.1273 24.8989V24.8934Z" fill="#00B4ED" />
            </svg>


          </p>
          <h1 className='text-5xl text-[#00B4ED] mt-4 font-bold'>0rs</h1>
          <p className='text-gray-700 font-semibold mt-4'>Total Fine Today </p>
          <p className='text-gray-600 text-lg'>Total Monthly Fine: <span className='text-[#00B4ED] text-2xl font-semibold'> 0rs</span></p>
        </div>
      </div>


      <div className='my-8 flex justify-between gap-4'>
        <div className='w-6/12 flex gap-5'>
          <button className='flex items-center text-lg justify-center p-3 rounded-xl text-white gap-2 font-semibold text-center hover:bg-orange-500 bg-[#00B4ED] w-6/12'>
            <p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_34_138)">
                  <path d="M17.5 10C17.5 5.85938 14.1406 2.5 10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" />
                  <path d="M10 6.875V13.125M13.125 10H6.875" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_34_138">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </p>
            Create Booking
          </button>
          <button className='flex items-center text-lg justify-center p-3 rounded-xl text-white gap-2 font-semibold text-center hover:bg-orange-500 bg-[#00B4ED] w-6/12'>
            <p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_34_144)">
                  <path d="M15.9375 3.75H4.0625C2.85438 3.75 1.875 4.72938 1.875 5.9375V14.0625C1.875 15.2706 2.85438 16.25 4.0625 16.25H15.9375C17.1456 16.25 18.125 15.2706 18.125 14.0625V5.9375C18.125 4.72938 17.1456 3.75 15.9375 3.75Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1.875 7.5H18.125M5 11.7188H6.875V12.5H5V11.7188Z" stroke="white" strokeWidth="2.34375" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_34_144">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>


            </p>
            Payment & Requests
          </button>
        </div>
        <div className='w-4/12 flex gap-5'>
          <div className='w-5/12'>
            <p className='text-sm'>Shift Time Start</p>
            <div className='border w-full border-gray-300 flex  items-center bg-white gap-5 p-2 rounded-lg'>
              <p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_34_154)">
                    <path d="M13 2.5H3C2.17157 2.5 1.5 3.17157 1.5 4V13C1.5 13.8284 2.17157 14.5 3 14.5H13C13.8284 14.5 14.5 13.8284 14.5 13V4C14.5 3.17157 13.8284 2.5 13 2.5Z" stroke="#6B7280" stroke-linejoin="round" />
                    <path d="M4 1.5V2.5M12 1.5V2.5M14.5 5H1.5" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_154">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </p>
              <p>14:00:00</p>
            </div>
          </div>
          <div className='w-5/12'>
            <p className='text-sm'>Shift Time End</p>
            <div className='border w-full border-gray-300 flex  items-center bg-white gap-5 p-2 rounded-lg'>
              <p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_34_154)">
                    <path d="M13 2.5H3C2.17157 2.5 1.5 3.17157 1.5 4V13C1.5 13.8284 2.17157 14.5 3 14.5H13C13.8284 14.5 14.5 13.8284 14.5 13V4C14.5 3.17157 13.8284 2.5 13 2.5Z" stroke="#6B7280" stroke-linejoin="round" />
                    <path d="M4 1.5V2.5M12 1.5V2.5M14.5 5H1.5" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_154">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </p>
              <p>23:00:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-2'>
        <div className='w-7/12 flex gap-4'>
          <div className="flex flex-col w-6/12 p-4 justify-center items-center rounded-md bg-white">
            <h1 className='leading-loose font-semibold'>Bookings Target Achieved</h1>
            <div className='mt-3'>

              <CircularGraph value={2} max={10} />
            </div>
          </div>
          <div className="flex flex-col w-6/12 p-4 justify-center items-center rounded-md bg-white">
            <h1 className='leading-loose font-semibold'>Bookings Target Achieved</h1>
            <div className='mt-3'>
              <RevenueGraph value={500} max={1000} />
            </div>
          </div>
        </div>
        <div className='w-5/12 rounded-md overflow-hidden bg-white'>
          <Attendence/>
        </div>
      </div>

      <div className='flex items-center justify-between gap-3'>
        <div className='w-6/12 mt-6'>
            <BookingsTable/>
        </div>
        <div className='w-6/12 mt-6'>
            <RevenuTable/>
        </div>
      </div>

      <div className='mt-6'>
        <LeavesTable/>
      </div>
    </div>
  )
}

export default page
