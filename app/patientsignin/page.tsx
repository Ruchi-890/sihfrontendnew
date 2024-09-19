'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Define the validation schema
const signInSchema = z.object({
  id: z.number().int().min(1, "ID is required"), // Validate that ID is a positive integer
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits").optional() // Validate phone number format
});

type SignInFormValues = z.infer<typeof signInSchema>;

function SignInForm() {
  const [isOpen, setIsOpen] = useState(true); // Control modal visibility

  // Initialize the form
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema)
  });

  // Handle form submission
  const onSubmit = (data: SignInFormValues) => {
    console.log("Sign In Data:", data);
    // Process the sign-in data here
  };

  if (!isOpen) return null; // Only render the modal if it's open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-center">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* ID Field */}
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID</label>
            <Input id="id" type="number" {...register('id', { required: true })} placeholder="Enter your ID" />
            {errors.id && <p className="mt-1 text-xs text-red-500">{errors.id.message}</p>}
          </div>

          {/* Phone Number Field */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <Input id="phoneNumber" type="text" {...register('phoneNumber')} placeholder="Enter your phone number" />
            {errors.phoneNumber && <p className="mt-1 text-xs text-red-500">{errors.phoneNumber.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button type="submit" className="w-full">Sign In</Button>
          </div>
        </form>

        {/* Close Button (optional, if you want a way to close the modal) */}
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default SignInForm;
