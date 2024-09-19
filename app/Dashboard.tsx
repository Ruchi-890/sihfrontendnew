import React, { useEffect, useState } from "react";
import TherapistDashboard from "./therapistdashboard"; // Import your therapist dashboard component
import PatientDashboard from "./patientdashboard"; // Import your patient dashboard component

function Dashboard() {
  const [role, setRole] = useState<string | null>(null);

  // Retrieve the user role from localStorage when the component mounts
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
    if (userDetails && userDetails.role) {
      setRole(userDetails.role);
    }
  }, []);

  // Conditional rendering based on the user's role
  if (role === "therapist") {
    return <TherapistDashboard />; // Show therapist dashboard
  } else if (role === "patient") {
    return <PatientDashboard />; // Show patient dashboard
  } else {
    return (
      <div>
        <p>Invalid role or not authenticated. Please sign in again.</p>
      </div>
    );
  }
}

export default Dashboard;
