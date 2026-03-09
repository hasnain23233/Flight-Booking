import React, { useMemo, useState } from "react";
import { useBookingStore } from "../store/bookingStore";

const PaddingBooking: React.FC = () => {
    const mockData = useBookingStore((state) => state.pending);
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");

    const [tempBrand, setTempBrand] = useState("");
    const [tempAgent, setTempAgent] = useState("");
    const [tempSort, setTempSort] = useState("");

    const [brandFilter, setBrandFilter] = useState("");
    const [agentFilter, setAgentFilter] = useState("");
    const [sortBy, setSortBy] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(50);

    const filteredData = useMemo(() => {
        let data = [...mockData];

        if (search) {
            data = data.filter((b) =>
                b.customerName.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (brandFilter) {
            data = data.filter((b) => b.brand === brandFilter);
        }

        if (agentFilter) {
            data = data.filter((b) => b.agent === agentFilter);
        }

        if (sortBy === "ref") {
            data.sort((a, b) => a.refNo - b.refNo);
        }

        return data;
    }, [mockData, search, brandFilter, agentFilter, sortBy]);

    const handleSearch = () => {
        setSearch(searchInput);
        setCurrentPage(1);
    };

    const handleApplyFilters = () => {
        setBrandFilter(tempBrand);
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
                <h1 className='font-semibold text-3xl text-gray-800'>Booking Approvals (Pending)  </h1> 
            </div>
            <div className=" flex flex-col justify-end items-end mb-6">
                <div className="space-x-5 w-full flex justify-between items-end">

                    <div className="w-3/12 flex gap-3">
                        <input
                            type="text"
                            placeholder="Search Customer"
                            className="border px-4 py-3 outline-none rounded w-full"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button
                            onClick={handleSearch}
                            className="px-4 bg-[#00B4ED] rounded-md text-white"
                        >
                            Search
                        </button>
                    </div>

                    <div className="w-3/12">
                        <p className="text-lg text-gray-700">Brands <span className="text-red-800 text-xl">*</span></p>
                        <select
                            className="border-2 rounded-lg w-full px-4 outline-none py-3"
                            onChange={(e) => setTempBrand(e.target.value)}
                        >
                            <option value="">--Select Brand--</option>
                            <option value="Sky">Sky</option>
                            <option value="TravelCo">TravelCo</option>
                        </select>
                    </div>

                    <div className="w-3/12">
                        <p className="text-lg text-gray-700">Sort By <span className="text-red-800 text-xl">*</span></p>
                        <select
                            className="border-2 rounded-lg w-full px-4 outline-none py-3"
                            onChange={(e) => setTempSort(e.target.value)}
                        >
                            <option value="">--Sort By--</option>
                            <option value="ref">Ref No</option>
                        </select>
                    </div>

                    <div className="w-3/12">
                        <p className="text-lg text-gray-700">Agents <span className="text-red-800 text-xl">*</span></p>
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



            <div className="bg-white rounded-xl shadow overflow-hidden">

                <div className="max-h-[500px] overflow-y-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-[#00B4ED] text-white sticky top-0">
                            <tr>
                                <th className="px-4 py-3">REF #</th>
                                <th className="px-4 py-3">FILE</th>
                                <th className="px-4 py-3">BOOKING DATE</th>
                                <th className="px-4 py-3">TRAVELING DATE</th>
                                <th className="px-4 py-3">REF NO#</th>
                                <th className="px-4 py-3">PAYMENT DATE</th>
                                <th className="px-4 py-3">SOURCE</th>
                                <th className="px-4 py-3">CUSTOMER NAME</th>
                                <th className="px-4 py-3">CARD</th>
                                <th className="px-4 py-3">BANK</th>
                                <th className="px-4 py-3">CASH</th>
                                <th className="px-4 py-3">CHEQUE</th>
                                <th className="px-4 py-3">DATE AMOUNT</th>
                                <th className="px-4 py-3">AGENT</th>
                            </tr>
                        </thead>

                        <tbody>
                            {paginatedData.length === 0 ? (
                                <tr>
                                    <td colSpan={14} className="text-center py-10 text-gray-500">
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
                                        <td className="px-4 py-3">{b.refNo}</td>
                                        <td className="px-4 py-3">{b.paymentDate}</td>
                                        <td className="px-4 py-3">{b.source}</td>
                                        <td className="px-4 py-3">{b.customerName}</td>
                                        <td className="px-4 py-3">{b.card}</td>
                                        <td className="px-4 py-3">{b.bank}</td>
                                        <td className="px-4 py-3">{b.cash}</td>
                                        <td className="px-4 py-3">{b.cheque}</td>
                                        <td className="px-4 py-3">{b.dateAmount}</td>
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
                            onChange={(e) => setPerPage(Number(e.target.value))}
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

export default PaddingBooking;
