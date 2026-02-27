import React, { useState } from 'react';
import { NavLink, useMatch } from 'react-router'; // import useMatch
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  end?: boolean;
  showChevron?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, end = false, showChevron = false }) => {
  const match = useMatch({ path: to, end }); // check if current route matches
  const isActive = !!match;

  return (
    <li
      className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 cursor-pointer ${isActive
        ? 'bg-[#00B4ED] text-white'
        : 'text-gray-500 hover:bg-[#00B4ED] hover:text-white'
        }`}
    >
      {children}
      {showChevron && <FontAwesomeIcon icon={faChevronRight} className="ml-auto" />}
    </li>
  );
};

const Navbar = () => {
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);
  const [isCustomerInquiriesOpen, setIsCustomerInquiriesOpen] = useState(false);
  

  const bookingSubItems = [
    { name: 'New Booking', path: '/booking-panel/new-booking' },
    { name: 'Booking Approvals', path: '/booking-panel/approvals' },
    { name: 'Pending Bookings', path: '/booking-panel/pending' },
    { name: 'Issued Uncleared', path: '/booking-panel/issued-uncleared' },
    { name: 'Issued Cleared', path: '/booking-panel/issued-cleared' },
    { name: 'Cancelled Bookings', path: '/booking-panel/cancelled' },
    { name: 'Search Booking', path: '/booking-panel/search' },
  ];
  const customerInquirySubItems = [
    { name: 'Flight Inquiries', path: '/customer-inquiries/flight-inquiries' },
    { name: 'Inquiry Follow up', path: '/customer-inquiries/inquiry-follow-up' },
    { name: 'Day Wise Summary', path: '/customer-inquiries/day-wise-summary' },
    { name: 'Inquiry Summary', path: '/customer-inquiries/inquiry-summary' },
    { name: 'Create Follow-Up ', path: '/customer-inquiries/create-follow-up' },
    { name: 'Email Backup', path: '/customer-inquiries/email-backup' },
    { name: 'Sale Conversion', path: '/customer-inquiries/sale-conversion' },
  ];


  return (
    <div className='p-3 bg-white h-full'>
      <ul className='space-y-3 font-semibold'>
        <NavItem to="/dashboard" end>
          <p>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_34_6)">
                <path d="M3.125 8.28125V17.5C3.125 17.6658 3.19085 17.8247 3.30806 17.9419C3.42527 18.0592 3.58424 18.125 3.75 18.125H7.5V12.8125C7.5 12.5639 7.59877 12.3254 7.77459 12.1496C7.9504 11.9738 8.18886 11.875 8.4375 11.875H11.5625C11.8111 11.875 12.0496 11.9738 12.2254 12.1496C12.4012 12.3254 12.5 12.5639 12.5 12.8125V18.125H16.25C16.4158 18.125 16.5747 18.0592 16.6919 17.9419C16.8092 17.8247 16.875 17.6658 16.875 17.5V8.28125" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.75 10L10.4254 2.0313C10.2301 1.82505 9.77344 1.82271 9.57461 2.0313L1.25 10M15.625 6.99224V2.50005H13.75V5.19536" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_34_6">
                  <rect width="20" height="20" fill="currentColor" />
                </clipPath>
              </defs>
            </svg>
          </p>
          <NavLink to="/dashboard" end className="flex-1">
            Dashboard
          </NavLink>
        </NavItem>
        <li className="relative">
          <div
            className="flex items-center gap-3 p-3 rounded-lg text-gray-500 hover:bg-[#00B4ED] hover:text-white transition-colors duration-200 cursor-pointer"
            onClick={() => setIsBookingsOpen(!isBookingsOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-5 h-5 shrink-0">
              <g clipPath="url(#clip0_34_13)">
                <path d="M16.25 3.125H3.75C2.71447 3.125 1.875 3.96447 1.875 5V16.25C1.875 17.2855 2.71447 18.125 3.75 18.125H16.25C17.2855 18.125 18.125 17.2855 18.125 16.25V5C18.125 3.96447 17.2855 3.125 16.25 3.125Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
                <path d="M11.5625 10C12.0803 10 12.5 9.58027 12.5 9.0625C12.5 8.54473 12.0803 8.125 11.5625 8.125C11.0447 8.125 10.625 8.54473 10.625 9.0625C10.625 9.58027 11.0447 10 11.5625 10Z" fill="currentColor" />
                <path d="M14.6875 10C15.2053 10 15.625 9.58027 15.625 9.0625C15.625 8.54473 15.2053 8.125 14.6875 8.125C14.1697 8.125 13.75 8.54473 13.75 9.0625C13.75 9.58027 14.1697 10 14.6875 10Z" fill="currentColor" />
                <path d="M11.5625 13.125C12.0803 13.125 12.5 12.7053 12.5 12.1875C12.5 11.6697 12.0803 11.25 11.5625 11.25C11.0447 11.25 10.625 11.6697 10.625 12.1875C10.625 12.7053 11.0447 13.125 11.5625 13.125Z" fill="currentColor" />
                <path d="M14.6875 13.125C15.2053 13.125 15.625 12.7053 15.625 12.1875C15.625 11.6697 15.2053 11.25 14.6875 11.25C14.1697 11.25 13.75 11.6697 13.75 12.1875C13.75 12.7053 14.1697 13.125 14.6875 13.125Z" fill="currentColor" />
                <path d="M5.3125 13.125C5.83027 13.125 6.25 12.7053 6.25 12.1875C6.25 11.6697 5.83027 11.25 5.3125 11.25C4.79473 11.25 4.375 11.6697 4.375 12.1875C4.375 12.7053 4.79473 13.125 5.3125 13.125Z" fill="currentColor" />
                <path d="M8.4375 13.125C8.95527 13.125 9.375 12.7053 9.375 12.1875C9.375 11.6697 8.95527 11.25 8.4375 11.25C7.91973 11.25 7.5 11.6697 7.5 12.1875C7.5 12.7053 7.91973 13.125 8.4375 13.125Z" fill="currentColor" />
                <path d="M5.3125 16.25C5.83027 16.25 6.25 15.8303 6.25 15.3125C6.25 14.7947 5.83027 14.375 5.3125 14.375C4.79473 14.375 4.375 14.7947 4.375 15.3125C4.375 15.8303 4.79473 16.25 5.3125 16.25Z" fill="currentColor" />
                <path d="M8.4375 16.25C8.95527 16.25 9.375 15.8303 9.375 15.3125C9.375 14.7947 8.95527 14.375 8.4375 14.375C7.91973 14.375 7.5 14.7947 7.5 15.3125C7.5 15.8303 7.91973 16.25 8.4375 16.25Z" fill="currentColor" />
                <path d="M11.5625 16.25C12.0803 16.25 12.5 15.8303 12.5 15.3125C12.5 14.7947 12.0803 14.375 11.5625 14.375C11.0447 14.375 10.625 14.7947 10.625 15.3125C10.625 15.8303 11.0447 16.25 11.5625 16.25Z" fill="currentColor" />
                <path d="M5 1.875V3.125M15 1.875V3.125" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.125 6.25H1.875" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_34_13">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg><span className="flex-1">Bookings Panel</span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`ml-auto transition-transform duration-200 ${isBookingsOpen ? 'rotate-90' : ''
                }`}
            />
          </div>

          {/* Dropdown sub-menu */}
          {isBookingsOpen && (
            <ul className="mt-1 ml-8 space-y-1 border-l-2 border-gray-200 pl-2">
              {bookingSubItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block p-2 rounded-lg font-light transition-colors duration-200 ${isActive
                        ? 'bg-[#00B4ED] text-white'
                        : 'text-gray-500 hover:bg-[#00B4ED] hover:text-white'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Customer Inquiries */}
        <li className="relative">
          <div
            className="flex items-center gap-3 p-3 rounded-lg text-gray-500 hover:bg-[#00B4ED] hover:text-white transition-colors duration-200 cursor-pointer"
            onClick={() => setIsCustomerInquiriesOpen(!isCustomerInquiriesOpen)}
          >
            {/* Customer icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_34_37)">
                <path
                  d="M15.7031 6.5625C15.5887 8.15117 14.4102 9.375 13.125 9.375C11.8398 9.375 10.6594 8.15156 10.5469 6.5625C10.4297 4.90977 11.5769 3.75 13.125 3.75C14.673 3.75 15.8203 4.93984 15.7031 6.5625Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.125 11.875C10.5793 11.875 8.13128 13.1395 7.518 15.602C7.43675 15.9277 7.64104 16.25 7.97581 16.25H18.2746C18.6094 16.25 18.8125 15.9277 18.7324 15.602C18.1192 13.1 15.6711 11.875 13.125 11.875Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeMiterlimit="10"
                />
                <path
                  d="M7.81251 7.26328C7.7211 8.53203 6.76876 9.53125 5.74219 9.53125C4.71563 9.53125 3.76173 8.53242 3.67188 7.26328C3.57852 5.94336 4.50548 5 5.74219 5C6.97891 5 7.90587 5.96758 7.81251 7.26328Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.04689 11.9531C7.34181 11.6301 6.56525 11.5059 5.7422 11.5059C3.71095 11.5059 1.75392 12.5156 1.26369 14.4824C1.19923 14.7426 1.36252 15 1.6297 15H6.01564"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_34_37">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span className="flex-1">Customer Inquiries</span>

            <FontAwesomeIcon
              icon={faChevronRight}
              className={`ml-auto transition-transform duration-200 ${isCustomerInquiriesOpen ? "rotate-90" : ""
                }`}
            />
          </div>

          {/* Dropdown sub-menu */}
          {isCustomerInquiriesOpen && (
            <ul className="mt-1 ml-8 space-y-1 border-l-2 border-gray-200 pl-2">
              {customerInquirySubItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block p-2 rounded-lg font-light transition-colors duration-200 ${isActive
                        ? "bg-[#00B4ED] text-white"
                        : "text-gray-500 hover:bg-[#00B4ED] hover:text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Reporting */}
        <NavItem to="/reporting" showChevron> {/* adjust route as needed */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_34_46)">
              <path d="M4.0625 12.5H2.8125C2.63991 12.5 2.5 12.6399 2.5 12.8125V18.4375C2.5 18.6101 2.63991 18.75 2.8125 18.75H4.0625C4.23509 18.75 4.375 18.6101 4.375 18.4375V12.8125C4.375 12.6399 4.23509 12.5 4.0625 12.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.8125 8.75H11.5625C11.3899 8.75 11.25 8.88991 11.25 9.0625V18.4375C11.25 18.6101 11.3899 18.75 11.5625 18.75H12.8125C12.9851 18.75 13.125 18.6101 13.125 18.4375V9.0625C13.125 8.88991 12.9851 8.75 12.8125 8.75Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.1875 4.375H15.9375C15.7649 4.375 15.625 4.51491 15.625 4.6875V18.4375C15.625 18.6101 15.7649 18.75 15.9375 18.75H17.1875C17.3601 18.75 17.5 18.6101 17.5 18.4375V4.6875C17.5 4.51491 17.3601 4.375 17.1875 4.375Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.4375 1.25H7.1875C7.01491 1.25 6.875 1.38991 6.875 1.5625V18.4375C6.875 18.6101 7.01491 18.75 7.1875 18.75H8.4375C8.61009 18.75 8.75 18.6101 8.75 18.4375V1.5625C8.75 1.38991 8.61009 1.25 8.4375 1.25Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_34_46">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <NavLink to="/reporting" end className="flex-1">
            Reporting
          </NavLink>
        </NavItem>

        {/* Settings */}
        <NavItem to="/settings"> {/* adjust route as needed */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_34_55)">
              <path d="M10.2457 7.51211C9.73277 7.46145 9.21671 7.57057 8.76819 7.82454C8.31967 8.07851 7.96061 8.4649 7.74017 8.93082C7.51973 9.39673 7.44869 9.91939 7.53678 10.4272C7.62486 10.9351 7.86777 11.4033 8.23223 11.7678C8.5967 12.1322 9.06491 12.3751 9.57276 12.4632C10.0806 12.5513 10.6033 12.4803 11.0692 12.2598C11.5351 12.0394 11.9215 11.6803 12.1755 11.2318C12.4294 10.7833 12.5386 10.2672 12.4879 9.7543C12.4301 9.17929 12.1754 8.64193 11.7667 8.23329C11.3581 7.82465 10.8207 7.56986 10.2457 7.51211ZM16.2652 10C16.2636 10.2717 16.2437 10.5431 16.2055 10.8121L17.9715 12.1973C18.0484 12.261 18.1002 12.35 18.1177 12.4483C18.1352 12.5466 18.1173 12.648 18.0672 12.7344L16.3965 15.625C16.3458 15.7106 16.2664 15.7754 16.1725 15.8082C16.0786 15.841 15.9762 15.8396 15.8832 15.8043L14.1293 15.098C14.0326 15.0595 13.9278 15.0456 13.8244 15.0576C13.721 15.0695 13.6221 15.1069 13.5367 15.1664C13.269 15.3507 12.9878 15.5145 12.6953 15.6562C12.6034 15.7009 12.5238 15.7676 12.4638 15.8503C12.4037 15.933 12.3649 16.0292 12.3508 16.1305L12.0879 18.0012C12.0706 18.1 12.0196 18.1897 11.9435 18.255C11.8674 18.3204 11.771 18.3573 11.6707 18.3594H8.3293C8.23069 18.3577 8.13559 18.3224 8.05969 18.2594C7.98378 18.1965 7.9316 18.1095 7.91172 18.0129L7.64922 16.1449C7.63448 16.0426 7.59468 15.9454 7.53334 15.8621C7.47201 15.7789 7.39105 15.712 7.29766 15.6676C7.00556 15.5266 6.72523 15.3624 6.45938 15.1766C6.37426 15.1173 6.27574 15.0802 6.17271 15.0686C6.06967 15.0569 5.96535 15.0711 5.86915 15.1098L4.11563 15.8156C4.0227 15.851 3.92027 15.8525 3.82638 15.8197C3.73248 15.787 3.65315 15.7222 3.60235 15.6367L1.93165 12.7461C1.88142 12.6597 1.86347 12.5583 1.88099 12.46C1.89852 12.3616 1.95038 12.2727 2.02735 12.209L3.51993 11.0371C3.6017 10.9722 3.66597 10.8879 3.7069 10.7918C3.74782 10.6958 3.76412 10.5911 3.7543 10.4871C3.74024 10.3242 3.73165 10.1617 3.73165 9.99883C3.73165 9.83594 3.73985 9.67578 3.7543 9.51641C3.76305 9.4131 3.74595 9.30924 3.70456 9.21418C3.66317 9.11912 3.59878 9.03585 3.51719 8.97187L2.0254 7.8C1.94968 7.73597 1.89891 7.64734 1.88198 7.54964C1.86505 7.45194 1.88305 7.35139 1.93282 7.26562L3.60352 4.375C3.65426 4.28945 3.73357 4.22455 3.82747 4.19175C3.92137 4.15895 4.02383 4.16035 4.1168 4.1957L5.87071 4.90195C5.96743 4.94046 6.07219 4.95438 6.17561 4.94245C6.27903 4.93052 6.37788 4.89311 6.46329 4.83359C6.73096 4.64927 7.01224 4.48552 7.30469 4.34375C7.39664 4.29906 7.47616 4.23242 7.53625 4.14972C7.59634 4.06701 7.63514 3.97078 7.64922 3.86953L7.91212 1.99883C7.92938 1.90003 7.98042 1.8103 8.05652 1.74496C8.13261 1.67963 8.22903 1.64275 8.3293 1.64062H11.6707C11.7693 1.64233 11.8644 1.67758 11.9403 1.74056C12.0162 1.80354 12.0684 1.8905 12.0883 1.98711L12.3508 3.85508C12.3655 3.95745 12.4053 4.05459 12.4667 4.13787C12.528 4.22114 12.609 4.28798 12.7023 4.33242C12.9945 4.47342 13.2748 4.63762 13.5406 4.82344C13.6258 4.88266 13.7243 4.91978 13.8273 4.93144C13.9303 4.9431 14.0347 4.92894 14.1309 4.89023L15.8844 4.18438C15.9773 4.14899 16.0797 4.14753 16.1736 4.18026C16.2675 4.21299 16.3469 4.2778 16.3977 4.36328L18.0684 7.25391C18.1186 7.34027 18.1365 7.44165 18.119 7.54001C18.1015 7.63837 18.0496 7.72732 17.9727 7.79102L16.4801 8.96289C16.398 9.02759 16.3333 9.1118 16.292 9.20786C16.2508 9.30392 16.2342 9.40878 16.2438 9.51289C16.2566 9.67461 16.2652 9.83711 16.2652 10Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_34_55">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <NavLink to="/settings" end className="flex-1">
            Settings
          </NavLink>
        </NavItem>
      </ul>
    </div>
  );
};

export default Navbar;