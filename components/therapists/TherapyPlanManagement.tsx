interface Template {
    id: number;
    name: string;
  }
  
  interface TherapyPlanManagementProps {
    templates: Template[];
  }
  
  export default function TherapyPlanManagement({ templates }: TherapyPlanManagementProps) {
    // Placeholder function for creating a new therapy plan
    const handleCreateNewPlan = () => {
      // Logic to create a new therapy plan goes here
      console.log('Creating a new therapy plan...');
    };
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
        <h3 className="text-lg font-semibold mb-4">Therapy Plan Management</h3>
        
        {/* Button to create a new therapy plan */}
        <button 
          onClick={handleCreateNewPlan} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          aria-label="Create new therapy plan"
        >
          Create New Plan
        </button>
        
        {/* List of existing therapy plan templates */}
        <h4 className="text-md mt-6 mb-2">Existing Plans</h4>
        <ul>
          {templates.length > 0 ? (
            templates.map((template: Template) => (
              <li key={template.id} className="flex justify-between py-2 border-b">
                {/* Template name */}
                <span className="font-medium">{template.name}</span>
                
                {/* Edit button */}
                <button className="text-blue-500 hover:underline" aria-label={`Edit ${template.name}`}>
                  Edit
                </button>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No existing therapy plans available.</li>
          )}
        </ul>
      </div>
    );
  }
  