import Layout from '@/components/home/Layout';
import SupervisorInfo from '@/components/home/SupervisorInfo';
import TherapistList from '@/components/home/TherapistList';
import SessionMonitor from '@/components/home/SessionMonitor';
import React from 'react';

interface Therapist {
  id: number;
  name: string;
  currentLoad: number;
}

interface LiveSession {
  id: number;
  therapistName: string;
  patientName: string;
  link: string;
}

export default function SupervisorDashboard() {
  const supervisorData = { name: "John Doe", role: "Lead Supervisor", agenda: "Review 3 therapy plans" };
  const therapists: Therapist[] = [
    { id: 1, name: "Jane Smith", currentLoad: 4 },
    { id: 2, name: "Bob Johnson", currentLoad: 3 }
  ];
  
  const liveSessions: LiveSession[] = [
    { id: 1, therapistName: "Jane Smith", patientName: "Patient A", link: "https://example.com/session1" }
  ];

  return (
    <Layout>
      <SupervisorInfo {...supervisorData} />
      <TherapistList therapists={therapists} />
      <SessionMonitor liveSessions={liveSessions} />
    </Layout>
  );
}