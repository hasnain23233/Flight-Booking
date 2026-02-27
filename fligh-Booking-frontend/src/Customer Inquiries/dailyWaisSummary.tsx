import React, { useState } from "react";
import { ChevronDown, ChevronUp, Building2, User, Search } from "lucide-react";

interface DaySummary {
    id: number;
    date: string;
    total: number;
}

const dummyData: DaySummary[] = [
    { id: 1, date: "2026-01-05", total: 194 },
    { id: 2, date: "2026-01-05", total: 167 },
    { id: 3, date: "2026-01-05", total: 453 },
    { id: 4, date: "2026-01-05", total: 93 },
    { id: 5, date: "2026-01-05", total: 22 },
    { id: 6, date: "2026-01-05", total: 194 },
    { id: 7, date: "2026-01-05", total: 194 },
    { id: 8, date: "2026-01-05", total: 194 },
];

const DayWiseSummary: React.FC = () => {
    const [company, setCompany] = useState("--Select Brand--");
    const [agent, setAgent] = useState("--Select Agent--");
    const [searchAgent, setSearchAgent] = useState("");
    const [openId, setOpenId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className=" bg-white p-8 font-sans">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Day Wise Summary
            </h1>

            {/* Filters */}
            <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-8">
                {/* Select Company */}

                <div className="md:w-1/4">
                    <p>Select Company: </p>
                    <div className="flex items-center border border-gray-300 rounded-md px-3 w-full  h-12">
                        <Building2 size={18} className="text-gray-500 mr-2" />
                        <select
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full outline-none text-gray-700"
                        >
                            <option>--Select Brand--</option>
                            <option>FlyFast</option>
                            <option>SkyJet</option>
                        </select>
                    </div>
                </div>

                {/* Select Agent */}
                <div className=" md:w-1/4">
                    <p>Select Agent</p>
                    <div className="flex items-center border border-gray-300 rounded-md px-3 w-full h-12">
                        <User size={18} className="text-gray-500 mr-2" />
                        <select
                            value={agent}
                            onChange={(e) => setAgent(e.target.value)}
                            className="w-full outline-none text-gray-700"
                        >
                            <option>--Select Agent--</option>
                            <option>Amjad Khan</option>
                            <option>Sara Ali</option>
                            <option>Ahmed Raza</option>
                        </select>
                    </div>
                </div>

                {/* Search Agent */}
                <div className="flex items-center border border-gray-300 rounded-md px-3 w-full md:w-1/4 h-12">
                    <Search size={18} className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search Agent"
                        value={searchAgent}
                        onChange={(e) => setSearchAgent(e.target.value)}
                        className="flex-1 outline-none text-gray-700"
                    />
                </div>

                {/* Search Button */}
                <button className="bg-[#00B4ED] text-white px-6 py-2 h-12 rounded-md hover:bg-sky-600 transition">
                    Search
                </button>
            </div>

            {/* Summary Cards */}
            <div className="space-y-3">
                {dummyData.map((day) => (
                    <div
                        key={day.id}
                        className="border border-gray-300 rounded-md px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition"
                        onClick={() => handleToggle(day.id)}
                    >
                        <div className="text-[#FF9900] font-semibold text-base">
                            {day.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 font-medium">
                            <span>Total Received Inquiries = {day.total}</span>
                            {openId === day.id ? (
                                <ChevronUp size={20} className="text-gray-500" />
                            ) : (
                                <ChevronDown size={20} className="text-gray-500" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DayWiseSummary;