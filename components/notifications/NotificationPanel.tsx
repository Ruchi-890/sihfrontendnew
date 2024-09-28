import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "../../components/ui/sheet";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Notification {
  id: number;
  title: string;
  message: string;
}

interface NotificationPanelProps {
  open: boolean;
  onClose: () => void;
}

const notifications: Notification[] = [
  { id: 1, title: "New Project Update", message: "The project has new features. Click here to see more." },
  { id: 2, title: "System Maintenance", message: "Scheduled maintenance will occur on Sunday at 2 AM. Details inside." },
  { id: 3, title: "New Comment on Task", message: "You have a new comment on your task. Click to view the comment." },
];

const NotificationPanel: React.FC<NotificationPanelProps> = ({ open, onClose }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      {/* Sheet Content */}
      <SheetContent side="right" className="w-[300px] bg-white p-4 shadow-lg">
        <SheetHeader>
          <SheetTitle className="text-black">Alerts</SheetTitle>
          <SheetDescription className="text-gray-700">
            You will see notifications from projects that you work on appear here.
          </SheetDescription>
        </SheetHeader>

        {/* Notification Cards */}
        <div className="mt-4 space-y-4">
          {notifications.map(({ id, title, message }) => (
            <div key={id} className="border rounded-lg p-4 bg-gray-50 cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <p className={`text-gray-600 mt-2 ${expandedId === id ? "" : "line-clamp-2"}`}>{message}</p>
              <button className="text-blue-500 mt-2" onClick={(e) => { e.stopPropagation(); toggleExpand(id); }}>
                {expandedId === id ? "Hide details" : "See details"}
              </button>
            </div>
          ))}
        </div>

        {/* Close Button */}
        <SheetClose asChild>
          <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" onClick={onClose}>
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationPanel;
