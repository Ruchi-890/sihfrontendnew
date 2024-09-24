import Layout from './components/Layout';
import SupervisorInfo from './components/SupervisorInfo';
import TherapistList from './components/TherapistList';
import SessionMonitor from './components/SessionMonitor';

export default function SupervisorDashboard() {
  const supervisorData = { name: "John Doe", role: "Lead Supervisor", agenda: "Review 3 therapy plans" };
  const therapists = [{ id: 1, name: "Jane Smith", currentLoad: 4 }, { id: 2, name: "Bob Johnson", currentLoad: 3 }];
  const liveSessions = [{ id: 1, therapistName: "Jane Smith", patientName: "Patient A", link: "https://example.com/session1" }];

  return (
    <Layout>
      <SupervisorInfo {...supervisorData} />
      <TherapistList therapists={therapists} />
      <SessionMonitor liveSessions={liveSessions} />
    </Layout>
  );
}
