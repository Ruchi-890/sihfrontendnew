'use client';
import CaseLoadOverview, { Patient } from "@/components/therapists/CaseLoaderOverview";
import PatientProgressTracking from "@/components/therapists/PatientprogessTracking";
import SessionDocumentation from "@/components/therapists/SessionDocument";
import TherapyPlanManagement from "@/components/therapists/TherapyPlanManagement"
import WelcomeMessage from "@/components/therapists/WelcomeMessage";

export default function TherapistDashboard() {
  // Sample therapist data
  const therapist = {
    name: 'John Doe',
    profilePic: '',  // You can replace this with an actual image link
    currentCases: 5,  // Number of active cases
  };

  // Sample patients data for case load overview
  const patients: Patient[] = [
    { id: 1, name: 'Alice Smith', status: 'In Progress', nextAppointment: '12/10/2024' },
    { id: 2, name: 'Bob Johnson', status: 'Pending Review', nextAppointment: '15/10/2024' },
    { id: 3, name: 'Charlie Brown', status: 'In Progress', nextAppointment: '20/10/2024' },
  ];
  

  // Sample therapy plan templates
  const templates = [
    { id: 1, name: 'Speech Therapy Plan' },
    { id: 2, name: 'Cognitive Therapy Plan' },
    { id: 3, name: 'Behavioral Therapy Plan' },
  ];

  // Sample progress data for Patient Progress Tracking
  const progressData = {
    labels: ['January', 'February', 'March'],  // Sample labels for progress
    datasets: [
      {
        label: 'Progress',  // Progress line chart
        data: [20, 40, 60],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
    milestones: [
      { id: 1, description: 'Completed Initial Assessment' },
      { id: 2, description: 'Reached Milestone 1' },
    ],
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Welcome Message */}
      <WelcomeMessage therapist={therapist} />
      
      {/* Case Load Overview */}
      <CaseLoadOverview patients={patients} />
      
      {/* Therapy Plan Management */}
      <TherapyPlanManagement templates={templates} />
      
      {/* Session Documentation */}
      <SessionDocumentation />
      
      {/* Patient Progress Tracking */}
      <PatientProgressTracking progressData={progressData} />
    </div>
  );
}
