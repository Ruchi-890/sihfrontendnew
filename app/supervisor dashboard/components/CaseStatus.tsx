import React from "react";

interface CaseStatusProps {
  status: string;
}

const CaseStatus = ({ status }: CaseStatusProps) => {
  let statusColor: string;
  switch (status) {
    case "Pending Approval":
      statusColor = "bg-yellow-500";
      break;
    case "In Progress":
      statusColor = "bg-blue-500";
      break;
    case "Completed":
      statusColor = "bg-green-500";
      break;
    default:
      statusColor = "bg-gray-400";
  }
  return <span className={`px-2 py-1 text-white rounded ${statusColor}`}>{status}</span>;
};

export default CaseStatus;
