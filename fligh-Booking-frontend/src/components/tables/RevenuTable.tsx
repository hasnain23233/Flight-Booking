import { useDashboardStore } from "../../store/dashboardStore";

export default function RevenuTable() {
  const {
    currentMonthRevenue,
    currentMonthRevenueTarget,
    previousMonthRevenue,
    previousMonthRevenueTarget,
  } = useDashboardStore();

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#00A1D3] text-white text-center py-3 font-semibold text-lg">
        REVENUE
      </div>

      {/* Subheader */}
      <div className="grid grid-cols-2 bg-[#00B4ED] text-white text-center">
        <div className="border-r border-gray-300   py-2">
          <div className="font-semibold">CURRENT MONTH</div>
          <div className="grid grid-cols-2 mt-1">
            <div>Revenue</div>
            <div>Target</div>
          </div>
        </div>
        <div className="py-2">
          <div className="font-semibold">PREVIOUS MONTH</div>
          <div className="grid grid-cols-2 mt-1">
            <div>Revenue</div>
            <div>Target</div>
          </div>
        </div>
      </div>

      {/* Data rows */}
      <div className="grid grid-cols-2 divide-x divide-gray-300 text-center">
        <div className="grid grid-cols-2 py-3">
          <div className="text-gray-700">{currentMonthRevenue ?? 'N/A'}</div>
          <div className="text-gray-700">{currentMonthRevenueTarget}</div>
        </div>
        <div className="grid grid-cols-2 py-3">
          <div className="text-gray-700">{previousMonthRevenue ?? 'N/A'}</div>
          <div className="text-gray-700">{previousMonthRevenueTarget}</div>
        </div>
      </div>
    </div>
  );
}
