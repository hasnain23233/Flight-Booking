import  { useState } from "react";

interface SaleData {
  id: number;
  agentName: string;
  totalInquiries: number;
  totalBookings: number;
}

const SaleConversion = () => {
  const [fromDate, setFromDate] = useState("2026-01-01");
  const [toDate, setToDate] = useState("2026-01-01");

  const data: SaleData[] = [
    { id: 1, agentName: "Talha Sajad", totalInquiries: 3, totalBookings: 1 },
    { id: 2, agentName: "Talha Sajad", totalInquiries: 2, totalBookings: 0 },
    { id: 3, agentName: "Talha Sajad", totalInquiries: 10, totalBookings: 0 },
    { id: 4, agentName: "Talha Sajad", totalInquiries: 3, totalBookings: 1 },
    { id: 5, agentName: "Talha Sajad", totalInquiries: 3, totalBookings: 1 },
    { id: 6, agentName: "Talha Sajad", totalInquiries: 2, totalBookings: 0 },
    { id: 7, agentName: "Talha Sajad", totalInquiries: 10, totalBookings: 0 },
    { id: 8, agentName: "Talha Sajad", totalInquiries: 3, totalBookings: 1 },
  ];

  const calculateConversion = (inquiries: number, bookings: number) => {
    if (inquiries === 0) return 0;
    return Math.round((bookings / inquiries) * 100);
  };

  const getRating = (conversion: number) => {
    if (conversion >= 50) return "Best";
    return "Bad";
  };

  const getImprovement = (conversion: number) => {
    if (conversion >= 50) return "Keep It Up";
    return "Check Suggestion";
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-6">Sale Conversion</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-6 items-end mb-6">
        <div>
          <label className="block text-sm mb-2">From Date:</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">To Date:</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg">
          Check
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-sky-500 h-16   text-white">
            <tr>
              <th className="py-3 px-4 text-left">Sr#</th>
              <th className="py-3 px-4 text-left">Agent Name</th>
              <th className="py-3 px-4 text-left">Total Inquiries</th>
              <th className="py-3 px-4 text-left">Total Bookings</th>
              <th className="py-3 px-4 text-left">Conversions</th>
              <th className="py-3 px-4 text-left">Rating</th>
              <th className="py-3 px-4 text-left">Improvements</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => {
              const conversion = calculateConversion(
                item.totalInquiries,
                item.totalBookings
              );

              const rating = getRating(conversion);
              const improvement = getImprovement(conversion);

              return (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{item.agentName}</td>
                  <td className="py-3 px-4">{item.totalInquiries}</td>
                  <td className="py-3 px-4">{item.totalBookings}</td>
                  <td className="py-3 px-4">{conversion}%</td>
                  <td
                    className={`py-3 px-4 font-medium ${
                      rating === "Best"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {rating}
                  </td>
                  <td
                    className={`py-3 px-4 font-medium ${
                      improvement === "Keep It Up"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {improvement}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SaleConversion;