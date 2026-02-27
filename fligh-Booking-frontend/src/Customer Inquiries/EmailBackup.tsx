import React from "react";
import { Download, Trash2 } from "lucide-react";

const EmailBackup: React.FC = () => {
  const handleDownloadMarch = () => {
    alert("📥 Downloading March backup...");
    // Example: window.open("/api/download/march", "_blank");
  };

  const handleDownloadOther = () => {
    alert("📥 Downloading other month backup...");
  };

  const handleDeleteOther = () => {
    if (window.confirm("⚠️ Are you sure you want to delete other month backups?")) {
      alert("🗑️ Other month backups deleted successfully!");
    }
  };

  return (
    <div className="  bg-gray-50 flex flex-col items-center p-8 font-sans">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 w-full  ">
        Email Backup
      </h1>

      {/* Buttons Container */}
      <div className="bg-white w-full  rounded-lg shadow-sm border border-gray-200 p-8 grid grid-cols-3 gap-6">
        {/* Download March */}
        <button
          onClick={handleDownloadMarch}
          className="flex items-center w-4/12 h-20 justify-center gap-2 bg-[#00B4ED] text-white font-semibold px-8 py-4 rounded-md hover:bg-sky-600 transition md:w-auto"
        >
          <Download size={20} />
          Download March Backup
        </button>

        {/* Download Other */}
        <button
          onClick={handleDownloadOther}
          className="flex items-center justify-center gap-2 bg-[#00B4ED] text-white font-semibold px-8 py-4 rounded-md hover:bg-sky-600 transition w-full md:w-auto"
        >
          <Download size={20} />
          Download Other Month
        </button>

        {/* Delete Other */}
        <button
          onClick={handleDeleteOther}
          className="flex items-center justify-center gap-2 bg-[#00B4ED] text-white font-semibold px-8 py-4 rounded-md hover:bg-sky-600 transition w-full md:w-auto"
        >
          <Trash2 size={20} />
          Delete Other Month
        </button>
      </div>
    </div>
  );
};

export default EmailBackup;