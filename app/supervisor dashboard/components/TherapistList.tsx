import React from "react";

interface Therapist {
  id: number;
  name: string;
  currentLoad: number;
}

interface TherapistListProps {
  therapists: Therapist[];
}

const TherapistList: React.FC<TherapistListProps> = ({ therapists }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Therapist Roster</h3>
      <ul>
        {therapists.map(therapist => (
          <li key={therapist.id} className="mb-2">
            <p>{therapist.name} - {therapist.currentLoad} cases</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TherapistList;