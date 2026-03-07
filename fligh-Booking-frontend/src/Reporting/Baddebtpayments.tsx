import { useState } from "react";

interface Payment {
  paymentId: number;
  bookingRef: number;
  type: string;
  payTo: string;
  payBy: string;
  amount: number;
  bookingDate: string;
  departureDate: string;
  customerName: string[];
  agent: string;
}

const initialData: Payment[] = [
  {
    paymentId: 14445,
    bookingRef: 1850,
    type: "C",
    payTo: "Bad Debt Receiver",
    payBy: "Bad Debt Sender",
    amount: 85.3,
    bookingDate: "2024-10-30",
    departureDate: "2025-04-02",
    customerName: ["M. Momin", "Maria Angeli Qiuqi"],
    agent: "Paul Garry",
  },
  {
    paymentId: 14445,
    bookingRef: 1850,
    type: "C",
    payTo: "Bad Debt Receiver",
    payBy: "Bad Debt Sender",
    amount: 85.3,
    bookingDate: "2024-10-30",
    departureDate: "2025-04-02",
    customerName: ["M. Momin", "Maria Angeli Qiuqi"],
    agent: "Paul Garry",
  },
  {
    paymentId: 14445,
    bookingRef: 1850,
    type: "D",
    payTo: "Bad Debt Receiver",
    payBy: "Bad Debt Sender",
    amount: 85.3,
    bookingDate: "2024-10-30",
    departureDate: "2025-04-02",
    customerName: ["M. Momin", "Maria Angeli Qiuqi"],
    agent: "Paul Garry",
  },
  {
    paymentId: 14445,
    bookingRef: 1850,
    type: "C",
    payTo: "Bad Debt Receiver",
    payBy: "Bad Debt Sender",
    amount: 85.3,
    bookingDate: "2024-10-30",
    departureDate: "2025-04-02",
    customerName: ["M. Momin", "Maria Angeli Qiuqi"],
    agent: "Paul Garry",
  },
];

const columns: { key: keyof Payment; label: string }[] = [
  { key: "paymentId", label: "Payment ID" },
  { key: "bookingRef", label: "Booking Ref" },
  { key: "type", label: "Type" },
  { key: "payTo", label: "Pay To" },
  { key: "payBy", label: "Pay By" },
  { key: "amount", label: "Amount" },
  { key: "bookingDate", label: "Booking Date" },
  { key: "departureDate", label: "Departure Date" },
  { key: "customerName", label: "Customer Name" },
  { key: "agent", label: "Agent" },
];

export default function BadDebtPayments() {
  const [sortKey, setSortKey] = useState<keyof Payment | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key: keyof Payment) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const sorted = [...initialData].sort((a, b) => {
    if (!sortKey) return 0;
    const av = a[sortKey];
    const bv = b[sortKey];
    if (av < bv) return sortAsc ? -1 : 1;
    if (av > bv) return sortAsc ? 1 : -1;
    return 0;
  });

  return (
    <div className="  p-8 font-sans">
      <div className="mx-auto     rounded overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-900">Bad Debt Payments</h2>
          <span className="text-sm text-gray-600">Total Records: {sorted.length}</span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto overflow-hidden rounded-xl bg-white">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-400 h-16">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    onClick={() => handleSort(col.key)}
                    className="text-white font-semibold text-center px-4 py-3 whitespace-nowrap cursor-pointer select-none hover:bg-sky-500 transition-colors"
                  >
                    {col.label}
                    {sortKey === col.key && (
                      <span className="ml-1 text-xs">{sortAsc ? "▲" : "▼"}</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 hover:bg-sky-50 transition-colors"
                >
                  <td className="text-center px-4 py-4 text-gray-800">{row.paymentId}</td>
                  <td className="text-center px-4 py-4 text-gray-800">{row.bookingRef}</td>
                  <td className="text-center px-4 py-4 text-gray-800">{row.type}</td>
                  <td className="text-center px-4 py-4 text-gray-800">{row.payTo}</td>
                  <td className="text-center px-4 py-4 text-gray-800">{row.payBy}</td>
                  <td className="text-center px-4 py-4 text-gray-800">{row.amount.toFixed(1)}</td>
                  <td className="text-center px-4 py-4 text-gray-800">{row.bookingDate}</td>
                  <td className="text-center px-4 py-4 text-gray-800">{row.departureDate}</td>
                  <td className="text-center px-4 py-4 text-gray-800">
                    {row.customerName.map((n, j) => (
                      <div key={j}>{n}</div>
                    ))}
                  </td>
                  <td className="text-center px-4 py-4 text-gray-800">{row.agent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}