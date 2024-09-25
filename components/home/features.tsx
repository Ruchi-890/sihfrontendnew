import React from 'react';

export default function Features() {
  return (
    <div className="features-section p-8">
      {/* Headline */}
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
        Features
      </h2>

      {/* Features Container */}
      <div className="features-container grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature Card 1 */}
        <div className="feature-card bg-blue-100 text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-semibold mb-4">Real-Time Collaboration</h3>
          <ul className="list-disc list-inside">
            <li>Interactive sessions</li>
            <li>Instant feedback</li>
            <li>Collaborate with supervisors</li>
            <li>Customizable treatment plans</li>
            <li>Secure communication</li>
          </ul>
        </div>

        {/* Feature Card 2 */}
        <div className="feature-card bg-blue-100 text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-semibold mb-4">Advanced Analytics</h3>
          <ul className="list-disc list-inside">
            <li>Track patient progress</li>
            <li>Detailed reports</li>
            <li>Data-driven insights</li>
            <li>Customizable metrics</li>
            <li>Real-time analysis</li>
          </ul>
        </div>

        {/* Feature Card 3 */}
        <div className="feature-card bg-blue-100 text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-semibold mb-4">Enhanced Supervision</h3>
          <ul className="list-disc list-inside">
            <li>Monitor sessions live</li>
            <li>Manage therapist workload</li>
            <li>Access patient records</li>
            <li>Schedule oversight sessions</li>
            <li>Provide guidance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
