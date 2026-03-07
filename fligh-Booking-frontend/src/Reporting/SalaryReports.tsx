import React, { useState } from "react";
import { FaCalendarAlt, FaUserTie, FaChevronDown, FaFileExcel } from "react-icons/fa";

type SalaryReport = {
  id: number;
  reportName: string;
};

const allReports: SalaryReport[] = [
  {
    id: 1,
    reportName: "Employee Tax Certificate",
  },
];

const SalaryReports: React.FC = () => {
  const [startDate, setStartDate] = useState("2026-01-01");
  const [endDate, setEndDate] = useState("2026-01-01");
  const [agent, setAgent] = useState("");
  const [gds, setGds] = useState("");

  const [reports, setReports] = useState<SalaryReport[]>(allReports);

  const handleApply = () => {
    // Example filter logic
    console.log({
      startDate,
      endDate,
      agent,
      gds,
    });

    setReports(allReports);
  };

  // Export Excel
  const exportExcel = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["ID,Reports"]
        .concat(reports.map(r => `${r.id},${r.reportName}`))
        .join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "salary_reports.csv";
    link.click();
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen font-sans">

      {/* Page Title */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Salary Reports
      </h1>

      {/* Selection Criteria */}
      <div className="bg-white rounded-xl p-6 shadow">

        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Selection Criteria
        </h2>

        <div className="grid grid-cols-2 gap-6">

          {/* Start Date */}
          <div>
            <label className="text-sm text-gray-500">Start Date:</label>

            <div className="relative mt-1">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full outline-none border rounded-lg p-3 pr-10"
              /> 
            </div>
          </div>

          {/* End Date */}
          <div>
            <label className="text-sm text-gray-500">End Date:</label>

            <div className="relative mt-1">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border outline-none  rounded-lg p-3 pr-10"
              /> 
            </div>
          </div>

          {/* Agent */}
          <div>
            <label className="text-sm text-gray-500">Select Agent</label>

            <div className="relative mt-1">
              <FaUserTie className="absolute left-3 top-4 text-gray-400" />

              <select
                value={agent}
                onChange={(e) => setAgent(e.target.value)}
                className="w-full border rounded-lg outline-none  p-3 pl-10 appearance-none"
              >
                <option value="">--Search Agent--</option>
                <option value="agent1">Agent 1</option>
                <option value="agent2">Agent 2</option>
              </select>

              <FaChevronDown className="absolute right-3 top-4 text-gray-400" />
            </div>
          </div>

          {/* GDS */}
          <div>
            <label className="text-sm text-gray-500">GDS:</label>

            <div className="relative mt-1">

              <select
                value={gds}
                onChange={(e) => setGds(e.target.value)}
                className="w-full border rounded-lg outline-none  p-3 appearance-none"
              >
                <option value="">--Search GDS--</option>
                <option value="amadeus">Amadeus</option>
                <option value="sabre">Sabre</option>
              </select>

              <FaChevronDown className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>

        </div>

        {/* Apply Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleApply}
            className="bg-[#1DA1CE] text-white px-6 py-2 rounded-md hover:bg-[#1893b7]"
          >
            Apply
          </button>
        </div>

      </div>

      {/* Profits Table */}
      <div className="mt-10 bg-white rounded-lg shadow overflow-hidden">

        <div className="bg-[#00B4ED] h-16 flex items-center text-white px-6 py-3 font-semibold">
          Profits
        </div>

        <table className="w-full text-sm">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Reports</th>
              <th className="p-4 text-right"></th>
            </tr>
          </thead>

          <tbody>

            {reports.map((r) => (
              <tr key={r.id} className="border-t h-14">

                <td className="p-4">{r.id}</td>

                <td className="p-4">{r.reportName}</td>

                <td className="p-4 text-right">

                  <button
                    onClick={exportExcel}
                    className="text-green-600 hover:text-green-800"
                  >
                    <FaFileExcel size={18} />
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default SalaryReports;