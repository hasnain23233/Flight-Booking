import React, { useState } from "react";
import { Calendar } from "lucide-react";

const CreateFollowUp: React.FC = () => {
    const [formData, setFormData] = useState({
        flightFrom: "--Select One--",
        flightTo: "--Select One--",
        departureDate: "2026-01-01",
        source: "",
        customerName: "",
        phone: "",
        email: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleReset = () => {
        setFormData({
            flightFrom: "--Select One--",
            flightTo: "--Select One--",
            departureDate: "2026-01-01",
            source: "",
            customerName: "",
            phone: "",
            email: "",
        });
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Follow-up created:", formData);
        alert("Follow-up saved successfully ✅");
    };

    return (
        <div className="  bg-gray-50 flex flex-col items-center p-8 font-sans">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 w-full  ">
                Create Follow Up
            </h1>

            {/* Form Container */}
            <form
                onSubmit={handleSave}
                className="bg-white w-full   rounded-lg shadow-sm border border-gray-200 p-8 space-y-6"
            >
                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Flight From */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Flight From:
                        </label>
                        <select
                            name="flightFrom"
                            value={formData.flightFrom}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 h-12 outline-none text-gray-700 focus:ring-2 focus:ring-sky-400"
                        >
                            <option>--Select One--</option>
                            <option>KHI</option>
                            <option>DXB</option>
                            <option>JED</option>
                            <option>LHE</option>
                        </select>
                    </div>

                    {/* Flight To */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Flight To:
                        </label>
                        <select
                            name="flightTo"
                            value={formData.flightTo}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 h-12 outline-none text-gray-700 focus:ring-2 focus:ring-sky-400"
                        >
                            <option>--Select One--</option>
                            <option>DXB</option>
                            <option>IST</option>
                            <option>DOH</option>
                            <option>RUH</option>
                        </select>
                    </div>
                </div>

                {/* Middle Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Departure Date */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Departure Date:
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md px-3 h-12">
                            <Calendar size={18} className="text-gray-500 mr-2" />
                            <input
                                type="date"
                                name="departureDate"
                                value={formData.departureDate}
                                onChange={handleChange}
                                className="w-full outline-none text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Source */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Source:
                        </label>
                        <input
                            type="text"
                            name="source"
                            placeholder="Enter Supplier's Reference..."
                            value={formData.source}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 h-12 outline-none text-gray-700 focus:ring-2 focus:ring-sky-400"
                        />
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Customer Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Customer Name:
                        </label>
                        <input
                            type="text"
                            name="customerName"
                            placeholder="Enter Customer Name"
                            value={formData.customerName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 h-12 outline-none text-gray-700 focus:ring-2 focus:ring-sky-400"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Enter Customer Phone No."
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 h-12 outline-none text-gray-700 focus:ring-2 focus:ring-sky-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Customer Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Customer Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 h-12 outline-none text-gray-700 focus:ring-2 focus:ring-sky-400"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-4 pt-4">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="flex items-center  justify-center bg-[#FF6047] text-white px-8 py-3 rounded-md font-semibold hover:bg-sky-600 transition w-32"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" className="" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3332 10.0003C18.3332 14.6028 14.6023 18.3337 9.99984 18.3337C5.39734 18.3337 1.6665 14.6028 1.6665 10.0003C1.6665 5.39783 5.39734 1.66699 9.99984 1.66699V3.33366C8.43214 3.33378 6.91463 3.88638 5.71393 4.89435C4.51324 5.90232 3.70617 7.30119 3.43453 8.84518C3.1629 10.3892 3.44406 11.9795 4.22864 13.3367C5.01321 14.694 6.251 15.7313 7.72452 16.2665C9.19805 16.8017 10.813 16.8004 12.2857 16.263C13.7584 15.7256 14.9947 14.6864 15.7772 13.3279C16.5597 11.9695 16.8384 10.3787 16.5644 8.83518C16.2904 7.29161 15.4812 5.89397 14.279 4.88783L12.4998 6.66699V1.66699H17.4998L15.4607 3.70616C16.3632 4.48765 17.0868 5.45429 17.5825 6.54036C18.0782 7.62644 18.3342 8.80649 18.3332 10.0003Z" fill="white" />
                        </svg>
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="flex items-center justify-center bg-[#00B4ED] text-white px-8 py-3 rounded-md font-semibold hover:bg-sky-600 transition w-32"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.707 10.293C7.61475 10.1975 7.50441 10.1213 7.3824 10.0689C7.2604 10.0165 7.12918 9.9889 6.9964 9.98775C6.86362 9.9866 6.73194 10.0119 6.60905 10.0622C6.48615 10.1125 6.3745 10.1867 6.2806 10.2806C6.18671 10.3745 6.11246 10.4861 6.06218 10.609C6.0119 10.7319 5.9866 10.8636 5.98775 10.9964C5.9889 11.1292 6.01649 11.2604 6.0689 11.3824C6.12131 11.5044 6.19749 11.6148 6.293 11.707L9.293 14.707C9.48053 14.8945 9.73484 14.9998 10 14.9998C10.2652 14.9998 10.5195 14.8945 10.707 14.707L13.707 11.707C13.8892 11.5184 13.99 11.2658 13.9877 11.0036C13.9854 10.7414 13.8802 10.4906 13.6948 10.3052C13.5094 10.1198 13.2586 10.0146 12.9964 10.0123C12.7342 10.01 12.4816 10.1108 12.293 10.293L11 11.586V6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V15C18 15.5304 17.7893 16.0391 17.4142 16.4142C17.0391 16.7893 16.5304 17 16 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H9V11.586L7.707 10.293ZM9 4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3C10.2652 3 10.5196 3.10536 10.7071 3.29289C10.8946 3.48043 11 3.73478 11 4V6H9V4Z" fill="white" />
                        </svg>

                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateFollowUp;