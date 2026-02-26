import logo from './../assets/logo.svg'
import user from './../assets/user.png'

const UpperNav = () => {
  return (
    <div className='fixed  w-full bg-white z-10'>
      <div className='h-16   flex gap-4 items-center justify-between p-4 border-b-2 border-gray-200'>
        <div className='relative w-2/12'>
          <div className='absolute top-3 left-3'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.63633 2.5C7.42268 2.5 6.23628 2.85989 5.22717 3.53416C4.21806 4.20843 3.43155 5.16679 2.9671 6.28806C2.50266 7.40932 2.38114 8.64314 2.61791 9.83347C2.85468 11.0238 3.43911 12.1172 4.29729 12.9754C5.15547 13.8335 6.24886 14.418 7.43919 14.6547C8.62952 14.8915 9.86334 14.77 10.9846 14.3056C12.1059 13.8411 13.0642 13.0546 13.7385 12.0455C14.4128 11.0364 14.7727 9.84998 14.7727 8.63633C14.7726 7.0089 14.126 5.44817 12.9753 4.2974C11.8245 3.14664 10.2638 2.5001 8.63633 2.5Z" stroke="#6B7280" stroke-width="1.25" stroke-miterlimit="10" />
              <path d="M13.2145 13.2145L17.5 17.5" stroke="#6B7280" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" />
            </svg>

          </div>

          <input type="search" name="search" placeholder='Search Booking ID' id="" className='pl-9 outline-none border border-gray-300 bg-gray-100 rounded-lg p-2 h-10' />
        </div>
        <div className='w-9/12  flex items-center justify-between'>
          <img src={logo} alt="" className='w-[80px]' />
          <div>
            <div className='flex gap-4 items-center'>
              <p className='text-gray-400'>Copy The Link And Ask Your <br /> Customer For Google Review</p>
              <div className='relative'>
                <div className='absolute top-3 right-4'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.5H8C7.60218 2.5 7.22064 2.65804 6.93934 2.93934C6.65804 3.22064 6.5 3.60218 6.5 4V5H8C8.79565 5 9.55871 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8V9.5H12C12.3978 9.5 12.7794 9.34196 13.0607 9.06066C13.342 8.77936 13.5 8.39782 13.5 8V4C13.5 3.60218 13.342 3.22064 13.0607 2.93934C12.7794 2.65804 12.3978 2.5 12 2.5ZM11 11H12C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1H8C7.20435 1 6.44129 1.31607 5.87868 1.87868C5.31607 2.44129 5 3.20435 5 4V5H4C3.20435 5 2.44129 5.31607 1.87868 5.87868C1.31607 6.44129 1 7.20435 1 8V12C1 12.7956 1.31607 13.5587 1.87868 14.1213C2.44129 14.6839 3.20435 15 4 15H8C8.79565 15 9.55871 14.6839 10.1213 14.1213C10.6839 13.5587 11 12.7956 11 12V11ZM4 6.5H8C8.39782 6.5 8.77936 6.65804 9.06066 6.93934C9.34196 7.22064 9.5 7.60218 9.5 8V12C9.5 12.3978 9.34196 12.7794 9.06066 13.0607C8.77936 13.342 8.39782 13.5 8 13.5H4C3.60218 13.5 3.22064 13.342 2.93934 13.0607C2.65804 12.7794 2.5 12.3978 2.5 12V8C2.5 7.60218 2.65804 7.22064 2.93934 6.93934C3.22064 6.65804 3.60218 6.5 4 6.5Z" fill="#6B7280" />
                  </svg>


                </div>

                <input type="search" name="search" placeholder='https//:google.com' id="" className='pr-9 outline-none border border-gray-300 bg-gray-100 rounded-lg p-2 h-10 w-[250px]' />
              </div>
            </div>
          </div>
          <div>
            <div className='relative w-2/12 '>
              <div className='absolute top-3 left-3'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.63633 2.5C7.42268 2.5 6.23628 2.85989 5.22717 3.53416C4.21806 4.20843 3.43155 5.16679 2.9671 6.28806C2.50266 7.40932 2.38114 8.64314 2.61791 9.83347C2.85468 11.0238 3.43911 12.1172 4.29729 12.9754C5.15547 13.8335 6.24886 14.418 7.43919 14.6547C8.62952 14.8915 9.86334 14.77 10.9846 14.3056C12.1059 13.8411 13.0642 13.0546 13.7385 12.0455C14.4128 11.0364 14.7727 9.84998 14.7727 8.63633C14.7726 7.0089 14.126 5.44817 12.9753 4.2974C11.8245 3.14664 10.2638 2.5001 8.63633 2.5Z" stroke="#6B7280" stroke-width="1.25" stroke-miterlimit="10" />
                  <path d="M13.2145 13.2145L17.5 17.5" stroke="#6B7280" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" />
                </svg>

              </div>

              <input type="search" name="search" placeholder='Search Agent' id="" className='pl-9 outline-none border border-gray-300 bg-gray-100 rounded-lg p-2 h-10 w-[250px]' />
            </div>
          </div>
        </div>
        <div>
          <img src={user} className='rounded-full' alt="" />
        </div>
      </div>
    </div>
  )
}

export default UpperNav
