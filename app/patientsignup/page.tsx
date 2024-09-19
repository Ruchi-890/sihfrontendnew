'use client';
import React from 'react';
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SignInForm from "../patientsignin/page";

// Define the form schema without assignedTherapist
const patientSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().optional(),
  email: z.string().email("Invalid email address").optional(),
  medicalHistory: z.string().optional(),
  role: z.enum(["therapist", "patient"]).refine(val => !!val, { message: "Role is required" }),  
  documents: z.instanceof(FileList).nullable().optional(), // Handle file uploads, can be FileList or null
});


function PatientForm() {
  const [showSignIn, setShowSignIn] = useState(false);

  // Initialize the form
  const form = useForm<z.infer<typeof patientSchema>>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      role: "patient", // Default to patient
      medicalHistory: "",
      documents: null, // Default to null if no file is selected
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof patientSchema>) => {
    // Handle form submission, including file upload
    console.log(values);

    // Store the form data locally
    localStorage.setItem('userDetails', JSON.stringify(values));

    // Example file handling (uploading to a server or processing)
    if (values.documents && values.documents.length > 0) {
      const file = values.documents[0]; // Assuming single file upload
      // Handle the file upload (e.g., send to server)
      const formData = new FormData();
      formData.append("file", file);
      // Replace with your upload endpoint
      await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
    }

     // Redirect or load the respective dashboard based on role
     if (values.role === "therapist") {
      window.location.href = '/therapist_dashboard'; // Replace with your actual therapist dashboard URL
    } else {
      window.location.href = '/patientdashboard'; // Replace with your actual patient dashboard URL
    }

  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue('documents', e.target.files || null); // Set to null if no files are selected
  };

  return (
    <main className="h-full flex justify-center items-center bg-gray-200">
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          {showSignIn ? (
            <SignInForm />
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Field */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter email address" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Role Field */}
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="border border-gray-300 rounded-md p-2 w-full"
                        >
                          <option value="patient">Patient</option>
                          <option value="therapist">Therapist</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Medical History Field */}
                <FormField
                  control={form.control}
                  name="medicalHistory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Medical History</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter medical history" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Document Upload Field */}
                <FormField
                  control={form.control}
                  name="documents"
                  render={() => (
                    <FormItem>
                      <FormLabel>Attach Documents (PDF only)</FormLabel>
                      <FormControl>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className="border border-gray-300 rounded-md p-2 w-full"
                        />
                      </FormControl>
                      <FormDescription>
                        Upload your PDF documents related to medical history.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                  Submit
                </Button>

                {/* Sign In Link */}
                <p className="text-center">
                  Already registered?{" "}
                  <Button variant="link" onClick={() => setShowSignIn(true)}>
                    Sign In
                  </Button>
                </p>
              </form>
            </Form>
          )}
        </div>
      </div>
    </main>
  );
}

export default PatientForm;
