export default function SupervisorInfo({ name, role, agenda }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-bold">Welcome, {name}!</h1>
      <p>Role: {role}</p>
      <p>Today's Agenda: {agenda}</p>
    </div>
  );
}
