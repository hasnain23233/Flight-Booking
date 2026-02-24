import React, { useMemo, useState } from "react";

interface Booking {
    id: number;
    file: number;
    bookingDate: string;
    travelingDate: string;
    returnDate: string; // ✅ fixed type
    sopRef: string;
    customerName: string;
    agent: string;
}

const mockData: Booking[] = Array.from({ length: 55 }, (_, i) => ({
    id: i + 1,
    file: 1000 + i,
    bookingDate: "01/01/2026",  
    travelingDate: "05/01/2026",
    returnDate: "10/01/2026",
    sopRef: "SOP-" + (5000 + i),
    customerName: "john",
    agent: i % 2 === 0 ? "amjad" : "ali",
}));

const Issued: React.FC = () => {

    const [tempAgent, setTempAgent] = useState("");
    const [tempSort, setTempSort] = useState("");

    const [agentFilter, setAgentFilter] = useState("");
    const [sortBy, setSortBy] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(50);

    // ✅ Filtering + Sorting
    const filteredData = useMemo(() => {
        let data = [...mockData];

        // Agent Filter
        if (agentFilter) {
            data = data.filter((b) => b.agent === agentFilter);
        }

        // Sorting
        if (sortBy === "ref") {
            data.sort((a, b) => a.id - b.id);
        }

        return data;
    }, [agentFilter, sortBy]);

    // ✅ Apply Button Logic
    const handleApplyFilters = () => {
        setAgentFilter(tempAgent);
        setSortBy(tempSort);
        setCurrentPage(1);
    };

    const totalPages = Math.ceil(filteredData.length / perPage);

    const paginatedData = filteredData.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );

    return (
        <div className="p-6 bg-gray-100 font-san min-h-screen">
            <div className=" my-4">
                <h1 className='font-semibold text-3xl text-gray-800'>
                    Issued Uncleared
                </h1>
            </div>

            {/* Filters */}
            <div className=" flex flex-col justify-end items-end mb-6">
                <div className="space-x-5 w-full flex justify-end items-end">

                    <div className="w-3/12">
                        <p className="text-lg text-gray-700">
                            Sort By <span className="text-red-800 text-xl">*</span>
                        </p>
                        <select
                            className="border-2 rounded-lg w-full px-4 outline-none py-3"
                            onChange={(e) => setTempSort(e.target.value)}
                        >
                            <option value="">--Sort By--</option>
                            <option value="ref">Ref No</option>
                        </select>
                    </div>

                    <div className="w-3/12">
                        <p className="text-lg text-gray-700">
                            Agents <span className="text-red-800 text-xl">*</span>
                        </p>
                        <select
                            className="border-2 rounded-lg w-full px-4 outline-none py-3"
                            onChange={(e) => setTempAgent(e.target.value)}
                        >
                            <option value="">--Select Agent--</option>
                            <option value="amjad">amjad</option>
                            <option value="ali">ali</option>
                        </select>
                    </div>
                </div>

                <button
                    onClick={handleApplyFilters}
                    className="bg-[#00B4ED] w-1/12 my-2 text-white px-6 py-2 rounded"
                >
                    Apply
                </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
                <div className="max-h-[500px] overflow-y-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-[#00B4ED] text-white sticky top-0">
                            <tr>
                                <th className="px-4 py-3">Sr #</th>
                                <th className="px-4 py-3">File No</th>
                                <th className="px-4 py-3">BOOKING DATE</th>
                                <th className="px-4 py-3">TRAVELING DATE</th>
                                <th className="px-4 py-3">Return Date</th>
                                <th className="px-4 py-3">Sop.Ref#</th>
                                <th className="px-4 py-3">Customer Name</th>
                                <th className="px-4 py-3">AGENT</th>
                            </tr>
                        </thead>

                        <tbody>
                            {paginatedData.length === 0 ? (
                                <tr>
                                    <td colSpan={8} className="text-center py-10 text-gray-500">
                                        No pending bookings found
                                    </td>
                                </tr>
                            ) : (
                                paginatedData.map((b) => (
                                    <tr key={b.id} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-3">{b.id}</td>
                                        <td className="px-4 py-3">{b.file}</td>
                                        <td className="px-4 py-3">{b.bookingDate}</td>
                                        <td className="px-4 py-3">{b.travelingDate}</td>
                                        <td className="px-4 py-3">{b.returnDate}</td>
                                        <td className="px-4 py-3">{b.sopRef}</td>
                                        <td className="px-4 py-3">{b.customerName}</td>
                                        <td className="px-4 py-3">{b.agent}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center p-4 text-sm">
                    <div>
                        Results Per Page:
                        <select
                            className="ml-2 border px-2 py-1 rounded"
                            value={perPage}
                            onChange={(e) => {
                                setPerPage(Number(e.target.value));
                                setCurrentPage(1);
                            }}
                        >
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                        </select>
                    </div>

                    <div className="flex gap-2">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                            className="px-3 py-1 border rounded disabled:opacity-50"
                        >
                            {"<"}
                        </button>

                        <span className="px-3 py-1 bg-blue-500 text-white rounded">
                            {currentPage}
                        </span>

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                            className="px-3 py-1 border rounded disabled:opacity-50"
                        >
                            {">"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Issued;