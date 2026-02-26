import React, { useState } from "react";

interface SearchResult {
    sr: number;
    fileNo: string;
    bookingDate: string;
    travellingDate: string;
    refNo: string;
    customerName: string;
    agent: string;
}

const dummyResults: SearchResult[] = [
    { sr: 1, fileNo: "F001", bookingDate: "01/01/2026", travellingDate: "05/01/2026", refNo: "REF123", customerName: "John Doe", agent: "AGENT1" },
    { sr: 2, fileNo: "F002", bookingDate: "02/01/2026", travellingDate: "06/01/2026", refNo: "REF456", customerName: "Jane Smith", agent: "AGENT2" },
    { sr: 3, fileNo: "F003", bookingDate: "03/01/2026", travellingDate: "07/01/2026", refNo: "REF789", customerName: "Robert Johnson", agent: "AGENT1" },
];

const searchOptions = [
    { id: "bookingDate", label: "Booking Date (Start & End Date)" },
    { id: "travellingDate", label: "Travelling Date (Start & End Date)" },
    { id: "ticketIssuanceDate", label: "Ticket Issuance Date (Start & End Date)" },
    { id: "email", label: "Email" },
    { id: "cancellationDate", label: "Cancellation Date (Start & End Date)" },
    { id: "bookingRefNo", label: "Booking Reference No (Value - Without prefix or Postfix)" },
    { id: "passengerFirstName", label: "Passenger First Name (Value)" },
    { id: "passengerSurname", label: "Passenger SurName (Value)" },
    { id: "pnr", label: "PNR (Value)" },
    { id: "eticketNumber", label: "eTicket Number (Value)" },
    { id: "gds", label: "GDS (Value, Start & End Travelling Date)" },
    { id: "airline", label: "Airline (Value, Start & End Travelling Date)" },
    { id: "supplierReference", label: "Supplier Reference (Value)" },
    { id: "phoneNumber", label: "Phone Number (Value)" },
    { id: "sourceOfBooking", label: "Source Of Booking (Value)" },
];

const SearchBooking: React.FC = () => {
    const [value, setValue] = useState("");
    const [startDate, setStartDate] = useState("2026-01-01");
    const [endDate, setEndDate] = useState("2026-01-01");
    const [selectedOptions, setSelectedOptions] = useState<Record<string, boolean>>(
        () => Object.fromEntries(searchOptions.map((opt) => [opt.id, false]))
    );
    const [results, setResults] = useState<SearchResult[]>([]);

    const handleCheckboxChange = (id: string) => {
        setSelectedOptions((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleSearch = () => {
        console.log("Search triggered with:", {
            value,
            startDate,
            endDate,
            selectedOptions: Object.entries(selectedOptions)
                .filter(([, isChecked]) => isChecked)
                .map(([id]) => id),
        });
        setResults(dummyResults);
    }; 

    return (
        <div className="min-h-screen bg-gray-100 p-6 font-sans">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-6 text-3xl font-bold text-gray-800">Search Booking</h1>

                {/* Form Card */}
                <div className="rounded-2xl bg-white p-8 shadow-md">
                    {/* Value and Dates */}
                    <div className=" ">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Value</label>
                            <input
                                type="text"
                                placeholder="Enter the Value..."
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-3">
                            <div >
                                <label className="block text-gray-700 font-medium mb-2">
                                    Start Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none"
                                /> 
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    End Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none"
                                /> 
                            </div>
                        </div>
                    </div>
 

                    {/* Search By */}
                    <div className="mt-6 ">
                        <h2 className="font-semibold text-gray-400 leading-loose tracking-wider mb-4">Search By:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {searchOptions.map((option) => (
                                <label key={option.id} className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedOptions[option.id]}
                                        onChange={() => handleCheckboxChange(option.id)}
                                        className="text-sky-500 focus:ring-sky-400"
                                    />
                                    <span className="text-gray-500 text-sm">{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            onClick={handleSearch}
                            className="bg-sky-500 text-white px-6 py-2 rounded-md hover:bg-sky-600 transition focus:outline-none focus:ring-2 focus:ring-sky-400"
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Results Table */}
                    <h2 className="text-2xl my-12 font-semibold text-gray-800 mb-4">Search Results</h2>
                <div className="mt-4 rounded-2xl bg-white overflow-hidden shadow-md">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-200 text-sm">
                            <thead className="bg-[#00B4ED] p-5 h-16 text-white">
                                <tr>
                                    {["Sr#", "File No", "Booking Date", "Travelling Date", "Ref#", "Customer Name", "AGENT"].map(
                                        (head) => (
                                            <th key={head} className="py-2 px-4 border border-gray-200 text-left">
                                                {head}
                                            </th>
                                        )
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {results.length > 0 ? (
                                    results.map((row) => (
                                        <tr key={row.sr} className="border-b hover:bg-gray-50 transition">
                                            <td className="py-2 px-4 border border-gray-200">{row.sr}</td>
                                            <td className="py-2 px-4 border border-gray-200">{row.fileNo}</td>
                                            <td className="py-2 px-4 border border-gray-200">{row.bookingDate}</td>
                                            <td className="py-2 px-4 border border-gray-200">{row.travellingDate}</td>
                                            <td className="py-2 px-4 border border-gray-200">{row.refNo}</td>
                                            <td className="py-2 px-4 border border-gray-200">{row.customerName}</td>
                                            <td className="py-2 px-4 border border-gray-200">{row.agent}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="py-6 text-center text-gray-500">
                                            No results found. Click Search to load dummy data.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBooking;