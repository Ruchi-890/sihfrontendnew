export interface Patient {
    id: number;
    name: string;
    status: 'In Progress' | 'Pending Review'; // You can extend this based on your use case
    nextAppointment: string;
  }
  
  interface CaseLoadOverviewProps {
    patients: Patient[];
  }
  
  export default function CaseLoadOverview({ patients }: CaseLoadOverviewProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
        <h3 className="text-lg font-semibold mb-4">Case Load Overview</h3>
        
        <ul>
          {patients.map((patient: Patient) => (
            <li key={patient.id} className="flex justify-between py-2 border-b">
              {/* Patient name */}
              <span className="font-medium">{patient.name}</span>
              
              {/* Case status with color-coded indicator */}
              <span
                className={`px-2 py-1 rounded text-white ${
                  patient.status === 'In Progress' ? 'bg-green-500' : 'bg-yellow-500'
                }`}
              >
                {patient.status}
              </span>
              
              {/* Next appointment date */}
              <span className="text-gray-500">Next Appointment: {patient.nextAppointment}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  