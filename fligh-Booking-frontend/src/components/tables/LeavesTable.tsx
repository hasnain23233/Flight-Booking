export default function LeavesTable() {
  return (
    <div className="w-full  mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#00A1D3] text-white text-center py-3 font-semibold text-lg">
        LEAVES
      </div>

      {/* Subheader */}
      <div className="grid grid-cols-3 bg-[#00B4ED] text-white text-center">
        <div className="py-2">Taken</div>
        <div className="py-2 border-x border-white/30">Remaining</div>
        <div className="py-2">Total</div>
      </div>

      {/* Data row */}
      <div className="grid grid-cols-3 text-center py-3">
        <div className="text-gray-700">0</div>
        <div className="text-gray-700">16</div>
        <div className="text-gray-700">16</div>
      </div>
    </div>
  );
}