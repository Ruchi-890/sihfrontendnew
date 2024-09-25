import React from "react";
interface LiveSession {
  id: number;
  therapistName: string;
  patientName: string;
  link: string;
}

interface SessionMonitorProps {
  liveSessions: LiveSession[];
}

const SessionMonitor: React.FC<SessionMonitorProps> = ({ liveSessions }) => {
  return (
    <div>
      <h2>Live Sessions</h2>
      <ul>
        {liveSessions.map((session) => (
          <li key={session.id}>
            {session.therapistName} is currently in a session with {session.patientName}.{' '}
            <a href={session.link} target="_blank" rel="noopener noreferrer">Join Session</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionMonitor;
// export default function SessionMonitor() {
//   return (
//     <section className="mb-4 p-4 bg-white rounded shadow">
//       <h2 className="text-xl font-semibold mb-2">Real-Time Session Monitoring</h2>
//       <p>No live sessions at the moment.</p>
//     </section>
//   );
// }
