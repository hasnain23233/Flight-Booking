import React, { useState } from "react";

type Report = {
  id: number;
  command: string;
  startDate: string;
  endDate: string;
  brand: string;
  agentId: string;
  gds: string;
  supplier: string;
  status: string;
};

const allReports: Report[] = [
  {
    id: 1,
    command: "net_profit/loss",
    startDate: "2025-01-01",
    endDate: "2025-01-30",
    brand: "Brand 1",
    agentId: "agent1",
    gds: "amadeus",
    supplier: "Supplier A",
    status: "Received",
  },
  {
    id: 2,
    command: "sales_report",
    startDate: "2025-02-01",
    endDate: "2025-02-10",
    brand: "Brand 2",
    agentId: "agent2",
    gds: "sabre",
    supplier: "Supplier B",
    status: "Received",
  },
];

const GeneralReports: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [agent, setAgent] = useState("");
  const [gds, setGds] = useState("");
  const [brand, setBrand] = useState("");
  const [reportType, setReportType] = useState("");

  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(false);

  // APPLY FILTER
  const handleApply = () => {
    setLoading(true);

    setTimeout(() => {
      let filtered = [...allReports];

      if (startDate) {
        filtered = filtered.filter(r => r.startDate >= startDate);
      }

      if (endDate) {
        filtered = filtered.filter(r => r.endDate <= endDate);
      }

      if (agent) {
        filtered = filtered.filter(r => r.agentId === agent);
      }

      if (gds) {
        filtered = filtered.filter(r => r.gds === gds);
      }

      if (brand) {
        filtered = filtered.filter(r => r.brand === brand);
      }

      if (reportType === "profit") {
        filtered = filtered.filter(r => r.command === "net_profit/loss");
      }

      if (reportType === "sales") {
        filtered = filtered.filter(r => r.command === "sales_report");
      }

      setReports(filtered);
      setLoading(false);
    }, 500);
  };

  // EXPORT CSV
  const exportCSV = () => {
    const headers = [
      "Command",
      "Start Date",
      "End Date",
      "Brand",
      "Agent ID",
      "GDS",
      "Supplier",
      "Status",
    ];

    const rows = reports.map(r => [
      r.command,
      r.startDate,
      r.endDate,
      r.brand,
      r.agentId,
      r.gds,
      r.supplier,
      r.status,
    ]);

    const csv =
      [headers, ...rows]
        .map(row => row.join(","))
        .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "reports.csv";
    a.click();
  };

  return (
    <div className="p-8 font-sans">

      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
        Email Backup
      </h1>

      {/* FILTER FORM */}
      <div className="bg-white rounded-xl p-6 shadow">

        <h2 className="font-semibold text-xl text-gray-700 mb-6">
          Selection Criteria
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label className="text-sm text-gray-500">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Select Agent</label>
            <select
              value={agent}
              onChange={e => setAgent(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
            >
              <option value="">-- Search Agent --</option>
              <option value="agent1">Agent 1</option>
              <option value="agent2">Agent 2</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-500">GDS</label>
            <select
              value={gds}
              onChange={e => setGds(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
            >
              <option value="">-- Search GDS --</option>
              <option value="amadeus">Amadeus</option>
              <option value="sabre">Sabre</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-500">Brand</label>
            <select
              value={brand}
              onChange={e => setBrand(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
            >
              <option value="">-- All --</option>
              <option value="Brand 1">Brand 1</option>
              <option value="Brand 2">Brand 2</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-500">Reports</label>
            <select
              value={reportType}
              onChange={e => setReportType(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
            >
              <option value="">-- Select Report Type --</option>
              <option value="profit">Net Profit/Loss</option>
              <option value="sales">Sales Report</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleApply}
            className="bg-[#1DA1CE] hover:bg-[#168cb3] text-white px-6 py-2 rounded-md"
          >
            {loading ? "Loading..." : "Apply"}
          </button>
        </div>

      </div>

      {/* TABLE */}
      <div className="mt-6 bg-white rounded-lg overflow-hidden shadow">

        <table className="w-full text-sm">

          <thead className="bg-[#1DA1CE] h-16 text-white">
            <tr>
              <th className="p-3">SR</th>
              <th className="p-3">Command</th>
              <th className="p-3">Start Date</th>
              <th className="p-3">End Date</th>
              <th className="p-3">Brand</th>
              <th className="p-3">Agent</th>
              <th className="p-3">GDS</th>
              <th className="p-3">Supplier</th>
              <th className="p-3">Status</th>
              <th className="p-3">URL</th>
            </tr>
          </thead>

          <tbody>
            {reports.length === 0 && !loading && (
              <tr>
                <td colSpan={10} className="text-center p-6 text-gray-400">
                  No data found
                </td>
              </tr>
            )}

            {reports.map((r, index) => (
              <tr key={r.id} className="border-b h-12 hover:bg-gray-50">
                <td className="p-3 text-center">{index + 1}</td>
                <td className="p-3 text-center">{r.command}</td>
                <td className="p-3 text-center">{r.startDate}</td>
                <td className="p-3 text-center">{r.endDate}</td>
                <td className="p-3 text-center">{r.brand}</td>
                <td className="p-3 text-center">{r.agentId}</td>
                <td className="p-3 text-center">{r.gds}</td>
                <td className="p-3 text-center">{r.supplier}</td>
                <td className="p-3 text-center">{r.status}</td>
                <td className="p-3 flex gap-2 justify-center">
                  <button className="bg-gray-500 text-white px-2 py-1 rounded text-xs">
                    PDF
                  </button>

                  <button
                    onClick={exportCSV}
                    className="bg-green-500 text-white px-2 py-1 rounded text-xs"
                  >
                    CSV
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

export default GeneralReports;