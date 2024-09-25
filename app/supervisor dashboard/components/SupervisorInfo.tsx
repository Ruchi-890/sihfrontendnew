import React from "react";

interface SupervisorInfoProps {
  name: string;
  role: string;
  agenda: string;
}

const SupervisorInfo: React.FC<SupervisorInfoProps> = ({ name, role, agenda }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-bold">Welcome, {name}!</h1>
      <p>Role: {role}</p>
      <p>Today's Agenda: {agenda}</p>
    </div>
  );
};
export default SupervisorInfo;