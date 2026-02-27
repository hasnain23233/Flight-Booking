import React, { useState } from "react";
import { Calendar, Building2 } from "lucide-react";

interface InquiryData {
  id: number;
  legalName: string;
  company: string;
  booked: number;
  lastPickedDate: string;
  inProgress: number;
  voiceMail: number;
  bookedOther: number;
  notInterested: number;
  withoutStatus: number;
  busyCalls: number;
  total: number;
  date: string; // for filtering by date
}

const dummyData: InquiryData[] = [
  {
    id: 1,
    legalName: "Amjad Khan",
    company: "FlyFast",
    booked: 52,
    lastPickedDate: "June,03,2025",
    inProgress: 961,
    voiceMail: 426,
    bookedOther: 45,
    notInterested: 186,
    withoutStatus: 0,
    busyCalls: 164,
    total: 1654,
    date: "2026-01-01",
  },
  {
    id: 2,
    legalName: "Sara Ali",
    company: "SkyJet",
    booked: 33,
    lastPickedDate: "May,10,2025",
    inProgress: 721,
    voiceMail: 320,
    bookedOther: 24,
    notInterested: 98,
    withoutStatus: 5,
    busyCalls: 105,
    total: 1306,
    date: "2026-01-02",
  },
  {
    id: 3,
    legalName: "Ahmed Raza",
    company: "AirConnect",
    booked: 61,
    lastPickedDate: "Apr,22,2025",
    inProgress: 1021,
    voiceMail: 610,
    bookedOther: 75,
    notInterested: 245,
    withoutStatus: 12,
    busyCalls: 234,
    total: 2258,
    date: "2026-01-03",
  },
];

const InquirySummary: React.FC = () => {
  const [fromDate, setFromDate] = useState("2026-01-01");
  const [toDate, setToDate] = useState("2026-01-03");
  const [company, setCompany] = useState("--Select Company--");
  const [filtered, setFiltered] = useState<InquiryData[]>(dummyData);

  const handleFilter = () => {
    const filteredData = dummyData.filter((item) => {
      const isDateInRange =
        item.date >= fromDate && item.date <= toDate;
      const isCompanyMatch =
        company === "--Select Company--" || item.company === company;
      return isDateInRange && isCompanyMatch;
    });
    setFiltered(filteredData);
  };

  return (
    <div className="  bg-white p-8 font-sans">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900   inline-block pb-1 mb-8">
        Inquiry Summary
      </h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 items-end">
        {/* From Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">From:</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 h-12">
            <Calendar size={18} className="text-gray-500 mr-2" />
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* To Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">To:</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 h-12">
            <Calendar size={18} className="text-gray-500 mr-2" />
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Select Company */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Select Company:</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 h-12">
            <Building2 size={18} className="text-gray-500 mr-2" />
            <select
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full outline-none text-gray-700"
            >
              <option>--Select Company--</option>
              <option>FlyFast</option>
              <option>SkyJet</option>
              <option>AirConnect</option>
            </select>
          </div>
        </div>

        {/* Filter Button */}
        <button
          onClick={handleFilter}
          className="bg-[#00B4ED] text-white h-12 rounded-md hover:bg-sky-600 transition font-medium"
        >
          Search
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl border border-gray-200">
        <table className="min-w-full border-collapse text-sm text-gray-800">
          <thead>
            <tr className="bg-[#00B4ED] h-16 text-white">
              <th className="px-4 py-2 text-left font-semibold">Legal Name</th>
              <th className="px-4 py-2 text-left font-semibold">Company</th>
              <th className="px-4 py-2 text-left font-semibold">Booked</th>
              <th className="px-4 py-2 text-left font-semibold">Last Picked Date</th>
              <th className="px-4 py-2 text-left font-semibold">In Progress</th>
              <th className="px-4 py-2 text-left font-semibold">Voice Mail</th>
              <th className="px-4 py-2 text-left font-semibold">Booked With Other Company</th>
              <th className="px-4 py-2 text-left font-semibold">Not Interested</th>
              <th className="px-4 py-2 text-left font-semibold">Without Status</th>
              <th className="px-4 py-2 text-left font-semibold">Busy Calls</th>
              <th className="px-4 py-2 text-left font-semibold">Total</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((row) => (
                <tr key={row.id} className="border-t h-14 border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2">{row.legalName}</td>
                  <td className="px-4 py-2">{row.company}</td>
                  <td className="px-4 py-2">{row.booked}</td>
                  <td className="px-4 py-2">{row.lastPickedDate}</td>
                  <td className="px-4 py-2">{row.inProgress}</td>
                  <td className="px-4 py-2">{row.voiceMail}</td>
                  <td className="px-4 py-2">{row.bookedOther}</td>
                  <td className="px-4 py-2">{row.notInterested}</td>
                  <td className="px-4 py-2">{row.withoutStatus}</td>
                  <td className="px-4 py-2">{row.busyCalls}</td>
                  <td className="px-4 py-2 font-semibold">{row.total}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={11}
                  className="text-center text-gray-500 py-6 font-medium"
                >
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InquirySummary;