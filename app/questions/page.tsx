'use client';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { useEffect } from 'react';

//import questions from 'C:\webdev\SltFrontend\src\testdata\testdata.json'; // Adjust path based on where your file is


// Static questions data for testing
const questions = [
  {
    id: 1,
    question: "What is your favorite color?",
    options: [
      { text: "Red" },
      { text: "Blue" },
      { text: "Green" }
    ],
    type: "multiple-choice",
    requiresOther: false
  },
  {
    id: 3,
    question: "Select your preferred contact method and provide any additional comments.",
    options: [
      { text: "Email" },
      { text: "Phone" },
      { text: "Mail" }
    ],
    type: "mixed",
    requiresOther: true
  }
];

type Option = {
  text: string;
};

type Question = {
  id: number;
  question: string;
  options: Option[];
  type: 'multiple-choice' | 'text' | 'mixed'; // Question type
  requiresOther: boolean; // Indicates if a custom answer is allowed
  answer?: string; // For text questions and mixed questions
  customAnswer?: string; // For custom answers in mixed questions
};

const Questionnaire = () => {
  const [formArray, setFormArray] = useState<Question[]>([]);

  useEffect(() => {
    // Set the formArray to the provided questions data
    setFormArray(questions as Question[]);
  }, []);

  const handleTextChange = (questionId: number, value: string) => {
    setFormArray((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? { ...q, answer: value } // Update the answer field for text input
          : q
      )
    );
  };

  const handleCustomAnswerChange = (questionId: number, value: string) => {
    setFormArray((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? { ...q, customAnswer: value } // Update the custom answer field
          : q
      )
    );
  };

  const handleSubmit = () => {
    console.log("Form Data:", formArray);
    // Handle form submission here
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Questionnaire</h1>

      {formArray.map((question) => (
        <div key={question.id} className="mb-4">
          <h2 className="text-lg font-semibold mb-2">{question.question}</h2>
          {question.type === 'multiple-choice' ? (
            <div>
              {question.options.map((option, index) => (
                <div key={index} className="mb-2">
                  <Input
                    type="text"
                    value={option.text}
                    readOnly // Make the input read-only
                    placeholder={`Option ${index + 1}`}
                    className="mb-2"
                  />
                </div>
              ))}
            </div>
          ) : question.type === 'text' ? (
            <Textarea
              value={(question.answer || '')} // Display the answer for text inputs
              onChange={(e) => handleTextChange(question.id, e.target.value)}
              placeholder="Enter your answer"
              className="mb-2"
            />
          ) : question.type === 'mixed' ? (
            <div>
              <div className="mb-2">
                <h3 className="text-md font-semibold mb-2">Options:</h3>
                {question.options.map((option, index) => (
                  <div key={index} className="mb-2">
                    <Input
                      type="text"
                      value={option.text}
                      readOnly // Make the input read-only
                      placeholder={`Option ${index + 1}`}
                      className="mb-2"
                    />
                  </div>
                ))}
              </div>
              <Textarea
                value={(question.customAnswer || '')} // Display the custom answer for mixed questions
                onChange={(e) => handleCustomAnswerChange(question.id, e.target.value)}
                placeholder="Enter additional comments if none of the options fit"
                className="mb-2"
              />
            </div>
          ) : null}
        </div>
      ))}

      <Button onClick={handleSubmit} className="mt-4">Submit</Button>
    </div>
  );
};

export default Questionnaire;
