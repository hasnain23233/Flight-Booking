import React from "react";
import { useBookingStore } from "../../store/bookingStore";

const BookingApprovalTable: React.FC = () => {
  const bookingData = useBookingStore((state) => state.rejected);
  return (
    <div className="w-full mt-6">
      <div className="rounded-2xl bg-gray-100 shadow-md overflow-hidden">

        {/* Title */}
        <div className="bg-[#00A1D3] text-white text-center py-4 text-lg font-semibold">
          Booking Approval (Pending)
        </div>

        {/* Scroll Wrapper */}
        <div className="max-h-[400px] overflow-y-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#00B4ED] text-white sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Company</th>
                <th className="px-6 py-3 font-medium">Code</th>
                <th className="px-6 py-3 font-medium">Booking date</th>
                <th className="px-6 py-3 font-medium">Departure Date</th>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Agent</th>
              </tr>
            </thead>

            <tbody>
              {bookingData.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center text-xl p-5">
                    No items
                  </td>
                </tr>
              ) : (
                bookingData.map((booking) => (
                  <tr key={booking.id} className="bg-white border-b">
                    <td className="px-6 py-4">{booking.id}</td>
                    <td className="px-6 py-4 truncate max-w-[150px]">
                      {booking.company}
                    </td>
                    <td className="px-6 py-4">{booking.code}</td>
                    <td className="px-6 py-4">{booking.bookingDate}</td>
                    <td className="px-6 py-4">{booking.departureDate}</td>
                    <td className="px-6 py-4">{booking.customer}</td>
                    <td className="px-6 py-4">{booking.agent}</td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default BookingApprovalTable;