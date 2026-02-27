import React, { useState } from "react";

interface Inquiry {
  sr: number;
  inquiryDate: string;
  inquiryId: string;
  inquiryTitle: string;
  customerEmail: string;
  phone: string;
  brand: string;
}

const dummyNewInquiries: Inquiry[] = [
  {
    sr: 1,
    inquiryDate: "2026-01-25",
    inquiryId: "INQ001",
    inquiryTitle: "Flight to Dubai",
    customerEmail: "john@example.com",
    phone: "+1 555 123 4567",
    brand: "SkyTravel",
  },
  {
    sr: 2,
    inquiryDate: "2026-01-26",
    inquiryId: "INQ002",
    inquiryTitle: "Europe Tour Inquiry",
    customerEmail: "sarah@example.com",
    phone: "+1 555 789 1234",
    brand: "HolidayWorld",
  },
];

const dummyUmrahInquiries: Inquiry[] = [
  {
    sr: 1,
    inquiryDate: "2026-01-27",
    inquiryId: "UMR001",
    inquiryTitle: "Umrah Family Package",
    customerEmail: "ali@example.com",
    phone: "+966 555 444 222",
    brand: "HolyTrips",
  },
];

const brands = ["--Select Brand--", "SkyTravel", "HolidayWorld", "HolyTrips", "FlyAway"];

const CustomerInquiries: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState("--Select Brand--");

  // Filter inquiries by selected brand
  const filteredNew = dummyNewInquiries.filter(
    (inq) => selectedBrand === "--Select Brand--" || inq.brand === selectedBrand
  );
  const filteredUmrah = dummyUmrahInquiries.filter(
    (inq) => selectedBrand === "--Select Brand--" || inq.brand === selectedBrand
  );

  return (
    <div className=" w-full font-sans my-4 bg-gray-100  p-6">
      <div className="mx-auto   space-y-10">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 md:mb-0 w-4/12">
            New Inquiries ({filteredNew.length})
          </h1>

          <div className=" w-3/12">
            <label className="text-gray-600 font-medium tracking-wider">Select Brand:</label> <br />
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="rounded-md border w-full border-gray-300 px-6 text-gray-500 py-2 h-14 text-sm focus:ring-2 focus:ring-sky-400 focus:outline-none"
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* New Inquiries Table */}
        <div className="rounded-2xl bg-white shadow-sm">
          <table className="min-w-full border-collapse rounded-xl overflow-hidden border border-gray-200 text-sm">
            <thead className="bg-[#00B4ED] h-16  text-white">
              <tr>
                {["Sr#", "Inquiry Date", "Inquiry ID", "Inquiry Title", "Customer Email", "Phone", "Brands"].map(
                  (head) => (
                    <th key={head} className="py-2 px-4 border border-gray-200 text-left">
                      {head}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filteredNew.length > 0 ? (
                filteredNew.map((inq) => (
                  <tr key={inq.sr} className="hover:bg-gray-50 h-12 border-b">
                    <td className="py-2 px-4 border border-gray-200">{inq.sr}</td>
                    <td className="py-2 px-4 border border-gray-200">{inq.inquiryDate}</td>
                    <td className="py-2 px-4 border border-gray-200">{inq.inquiryId}</td>
                    <td className="py-2 px-4 border border-gray-200">{inq.inquiryTitle}</td>
                    <td className="py-2 px-4 border border-gray-200">{inq.customerEmail}</td>
                    <td className="py-2 px-4 border border-gray-200">{inq.phone}</td>
                    <td className="py-2 px-4 border border-gray-200">{inq.brand}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-6 text-center text-gray-500">
                    No new inquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Umrah Inquiries Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Umrah Inquiries</h2>
          <div className="rounded-xl bg-white overflow-hidden shadow-sm">
            <table className="min-w-full border-collapse border border-gray-200 text-sm">
              <thead className="bg-[#00B4ED] h-16 text-white">
                <tr>
                  {["Sr#", "Inquiry Date", "Inquiry ID", "Inquiry Title", "Customer Email", "Phone", "Brands"].map(
                    (head) => (
                      <th key={head} className="py-2 px-4 border border-gray-200 text-left">
                        {head}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {filteredUmrah.length > 0 ? (
                  filteredUmrah.map((inq) => (
                    <tr key={inq.sr} className="hover:bg-gray-50 h-12 border-b">
                      <td className="py-2 px-4 border border-gray-200">{inq.sr}</td>
                      <td className="py-2 px-4 border border-gray-200">{inq.inquiryDate}</td>
                      <td className="py-2 px-4 border border-gray-200">{inq.inquiryId}</td>
                      <td className="py-2 px-4 border border-gray-200">{inq.inquiryTitle}</td>
                      <td className="py-2 px-4 border border-gray-200">{inq.customerEmail}</td>
                      <td className="py-2 px-4 border border-gray-200">{inq.phone}</td>
                      <td className="py-2 px-4 border border-gray-200">{inq.brand}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="py-6 text-center text-gray-500">
                      No Umrah inquiries found.
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

export default CustomerInquiries;