'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

// Example messages data
const messages = [
  {
    title: "Message from Dr Joseph",
    content: "Hey, how are you doing today?",
    received: "10 minutes ago"
  },
  {
    title: "Message from Dr Joseph",
    content: "I really liked your recent post!",
    received: "2 hours ago"
  },
  {
    title: "Message from Dr Joseph",
    content: "Do you have any book recommendations?",
    received: "1 day ago"
  }
];

// Example session data
const sessions = [
  {
    id: 1,
    date: "2024-09-20",
    time: "10:00 AM",
    therapistName: "Dr. Jane Smith",
    therapistId: "T123",
    department: "Psychology",
    status: "done"
  },
  {
    id: 2,
    date: "2024-09-21",
    time: "2:00 PM",
    therapistName: "Dr. John Doe",
    therapistId: "T456",
    department: "Counseling",
    status: "active"
  }
];

export default function Home() {
  const router = useRouter();
  const patientName = "John Doe"; // Example patient name

  const handleSignOut = () => {
    // Show a confirmation dialog
    const confirmSignOut = window.confirm("Are you sure you want to sign out?");
    if (confirmSignOut) {
      // Redirect to the main page (pages.tsx)
      router.push('/');
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-gray-200">
      {/* Header and Options */}
      <header className="bg-gray-800 p-6 flex items-center justify-between shadow-md">
        <div className="flex flex-col">
          <h1 className="text-4xl font-semibold text-blue-300">Hi {patientName}</h1>
          <p>ID: P123456</p>
        </div>
        <div className="space-x-4">
          <Button className="bg-blue-700 hover:bg-blue-600">Your Profile</Button>
          <Button className="bg-blue-700 hover:bg-blue-600">Your Reports</Button>
          <Button className="bg-blue-700 hover:bg-blue-600">Know Your Therapist</Button>
          <Button className="bg-blue-700 hover:bg-blue-600">Documents Submitted</Button>
        </div>
        <Button onClick={handleSignOut} className="bg-blue-800 hover:bg-blue-700 rounded-full px-6 py-3">Sign Out</Button>
      </header>

      {/* Main Section */}
      <section className="flex-grow bg-gray-800">
        {/* Carousel */}
        <div className="flex justify-center py-8">
          <div className="w-full max-w-md">
            <Carousel
              plugins={[Autoplay({ delay: 2000 })]}
              className="w-full"
            >
              <CarouselContent>
                {messages.map((message, index) => (
                  <CarouselItem key={index} className="p-4">
                    <Card className="bg-gray-200 text-gray-800">
                      <CardHeader>
                        <CardTitle>{message.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                        <Mail className="flex-shrink-0 text-blue-600" />
                        <div>
                          <p>{message.content}</p>
                          <p className="text-xs text-blue-500">{message.received}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Session List */}
        <div className="py-8 px-4">
          <h2 className="text-3xl font-semibold mb-4 text-blue-300">Sessions</h2>
          <div className="flex overflow-x-auto space-x-4">
            {sessions.map((session) => (
              <div
                key={session.id}
                className={`flex-shrink-0 p-4 rounded-lg ${session.status === 'done' ? 'bg-gray-600' : 'bg-gray-700'} text-gray-200 w-64`}
              >
                <p className="font-semibold">{session.date}</p>
                <p className="text-sm">{session.time}</p>
                <p className="text-sm font-semibold">{session.therapistName}</p>
                <p className="text-sm">Therapist ID: {session.therapistId}</p>
                <p className="text-sm">Department: {session.department}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-gray-700">
        <p className="text-gray-300">© 2024 True Feedback. All rights reserved.</p>
      </footer>
    </div>
  );
}
