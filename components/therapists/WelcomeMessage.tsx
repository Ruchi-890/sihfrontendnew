// Define the type for the therapist
import Image from "next/image";
interface Therapist {
    name: string;
    profilePic?: string; // Made this optional to handle cases without a profile picture
    currentCases: number;
  }
  
  export default function WelcomeMessage({ therapist }: { therapist: Therapist }) {
    // Placeholder image URL for therapists without a profile picture
    const placeholderImage = '';
  
    return (
      <div className="bg-blue-100 p-6 rounded-lg flex items-center space-x-4">
        {/* Therapist's profile picture */}
        <Image
          src={therapist.profilePic || placeholderImage} // Use placeholder if no profile picture
          alt={`${therapist.name}'s profile picture`}
          width={300}
          height={400}
          className="w-16 h-16 rounded-full"
          aria-label={`${therapist.name}'s profile picture`} // Accessibility improvement
        />
        
        {/* Therapist's info */}
        <div>
          <h2 className="text-xl font-bold">Welcome, {therapist.name}!</h2>
          <p className="text-gray-600">
            You have {therapist.currentCases} active case{therapist.currentCases !== 1 ? 's' : ''}.
          </p>
        </div>
      </div>
    );
  }
  