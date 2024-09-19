'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define the validation schema
const signInSchema = z.object({
  id: z.number().int().min(1, "ID is required"), // Validate that ID is a positive integer
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits").optional() // Validate phone number format
});

type SignInFormValues = z.infer<typeof signInSchema>;

function SignInForm() {
  // Initialize the form
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema)
  });

  // Handle form submission
  const onSubmit = (data: SignInFormValues) => {
    console.log("Sign In Data:", data);
    // Process the sign-in data here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* ID Field */}
      <div>
        <label htmlFor="id">ID</label>
        <Input id="id" type="number" {...register('id', { required: true })} placeholder="Enter your ID" />
        {errors.id && <p className="text-red-500">{errors.id.message}</p>}
      </div>

      {/* Phone Number Field */}
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <Input id="phoneNumber" type="text" {...register('phoneNumber')} placeholder="Enter your phone number" />
        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
      </div>

      {/* Submit Button */}
      <Button type="submit">Sign In</Button>
    </form>
  );
}

export default SignInForm;

