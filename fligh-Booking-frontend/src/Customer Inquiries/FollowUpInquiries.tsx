import React, { useState } from "react";

interface Inquiry {
  id: number;
  date: string;
  inquiryId: string;
  title: string;
  primaryPlane: string;
  status: string;
  agent: string;
}

const dummyData: Inquiry[] = [
  { id: 1, date: "2026-01-01", inquiryId: "FM-15302", title: "Flight Search - Amjad-EV8 to KHI-GK3 for Dec-12", primaryPlane: "2398472", status: "Not Interested", agent: "Amjad Khan" },
  { id: 2, date: "2026-01-01", inquiryId: "FM-15302", title: "Flight Search - Amjad-EV8 to KHI-GK3 for Dec-12", primaryPlane: "2398472", status: "In Progress", agent: "Amjad Khan" },
  { id: 3, date: "2026-01-01", inquiryId: "FM-15302", title: "Flight Search - Amjad-EV8 to KHI-GK3 for Dec-12", primaryPlane: "2398472", status: "Booked", agent: "Amjad Khan" },
  { id: 4, date: "2026-01-01", inquiryId: "FM-15302", title: "Flight Search - Amjad-EV8 to KHI-GK3 for Dec-12", primaryPlane: "2398472", status: "Released", agent: "Amjad Khan" },
  { id: 5, date: "2026-01-01", inquiryId: "FM-15302", title: "Flight Search - Amjad-EV8 to KHI-GK3 for Dec-12", primaryPlane: "2398472", status: "Voice Mail", agent: "Amjad Khan" },
  { id: 6, date: "2026-01-01", inquiryId: "FM-15302", title: "Flight Search - Amjad-EV8 to KHI-GK3 for Dec-12", primaryPlane: "2398472", status: "Line Temporary Busy", agent: "Amjad Khan" },
  { id: 7, date: "2026-01-01", inquiryId: "FM-15302", title: "Flight Search - Amjad-EV8 to KHI-GK3 for Dec-12", primaryPlane: "2398472", status: "Booked", agent: "Amjad Khan" },
  { id: 8, date: "2026-01-01", inquiryId: "FM-15302", title: "Flight Search - Amjad-EV8 to KHI-GK3 for Dec-12", primaryPlane: "2398472", status: "Released", agent: "Amjad Khan" },
  { id: 9, date: "2026-01-01", inquiryId: "FM-15302", title: "Flight Search - Amjad-EV8 to KHI-GK3 for Dec-12", primaryPlane: "2398472", status: "Not Interested", agent: "Amjad Khan" },
];

// map each status to colors
const statusColors: Record<string, string> = {
  "Not Interested": "bg-red-500 text-white",
  "In Progress": "bg-yellow-400 text-gray-800",
  "Booked": "bg-green-500 text-white",
  "Released": "bg-green-400 text-white",
  "Voice Mail": "bg-indigo-500 text-white",
  "Line Temporary Busy": "bg-gray-400 text-white",
};

const agents = ["--Select Agent--", "Amjad Khan", "Sara Ali", "Ahmed Raza"];
const destinations = ["--Select Destination--", "Dubai", "Jeddah", "Istanbul", "London"];
const statuses = [
  "--Select Status--",
  "Not Interested",
  "In Progress",
  "Booked",
  "Released",
  "Voice Mail",
  "Line Temporary Busy",
];

const FollowUpInquiries: React.FC = () => {
  const [fromDate, setFromDate] = useState("2026-01-01");
  const [toDate, setToDate] = useState("2026-01-01");
  const [status, setStatus] = useState("--Select Status--");
  const [destination, setDestination] = useState("--Select Destination--");
  const [agent, setAgent] = useState("--Select Agent--");
  const [searchAgent, setSearchAgent] = useState("");

  const [filtered, setFiltered] = useState<Inquiry[]>(dummyData);

  const handleSearch = () => {
    const results = dummyData.filter(
      (inq) =>
        (agent === "--Select Agent--" || inq.agent === agent) &&
        (status === "--Select Status--" || inq.status === status) &&
        (searchAgent === "" || inq.agent.toLowerCase().includes(searchAgent.toLowerCase()))
    );
    setFiltered(results);
  };

  return (
    <div className="  bg-gray-100 p-6 font-sans">
      <div className="  mx-auto space-y-6">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-800">
          Follow up Inquiries ({filtered.length})
        </h1>

        {/* Filter Form */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* From Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">From:</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 h-14 focus:ring-sky-400 outline-none"
              />
            </div>

            {/* To Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">To:</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 h-14 focus:ring-sky-400 outline-none"
              />
            </div>

            {/* Agent Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Agent:</label>
              <select
                value={agent}
                onChange={(e) => setAgent(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 h-14 focus:ring-sky-400 outline-none"
              >
                {agents.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>

            {/* Status Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Status:</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 h-14 focus:ring-sky-400 outline-none"
              >
                {statuses.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Destination Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Destination:</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 h-14 focus:ring-sky-400 outline-none"
              >
                {destinations.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Agent search + Button */}
          <div className="mt-6   flex w-4/12 flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Search Agent"
              value={searchAgent}
              onChange={(e) => setSearchAgent(e.target.value)}
              className="flex-1 border  rounded-md px-3 py-2 focus:ring-2 h-14 focus:ring-sky-400 outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-[#00B4ED] text-white px-6 py-2 h-14 rounded-md hover:bg-sky-600 transition"
            >
              Search
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white  rounded-xl shadow-sm overflow-x-auto">
          <table className="min-w-full rounded-xl overflow-hidden border-collapse border border-gray-200 text-sm">
            <thead className="bg-[#00B4ED] h-16 text-white">
              <tr>
                {[
                  "Sr#",
                  "Inquiry Date",
                  "Inquiry ID",
                  "Inquiry Title",
                  "Primary Plane",
                  "Status",
                  "Agent",
                ].map((head) => (
                  <th key={head} className="py-2 px-4 border border-gray-200 text-left">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((inq, index) => (
                  <tr key={inq.id} className="hover:bg-gray-50 h-12 border-b">
                    <td className="py-2 px-4 border border-gray-200">{index + 1}</td>
                    <td className="py-2 px-4 border border-gray-200">{inq.date}</td>
                    <td className="py-2 px-4 border border-gray-200 text-sky-600 font-semibold cursor-pointer">
                      {inq.inquiryId}
                    </td>
                    <td className="py-2 px-4 border border-gray-200 font-semibold text-gray-800">
                      {inq.title}
                    </td>
                    <td className="py-2 px-4 border border-gray-200">{inq.primaryPlane}</td>
                    <td className="py-2 px-4 border border-gray-200 ">
                      <span
                        className={`px-3 py-3 rounded-md h-14 text-xs font-medium w-[200px] ${statusColors[inq.status]}`}
                      >
                        {inq.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 border border-gray-200">{inq.agent}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-6 text-center text-gray-500">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-start items-center gap-2 mt-4 text-sm text-gray-600">
            <span>Select Page</span>
            <select className="border rounded-md px-2 py-1">
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUpInquiries;