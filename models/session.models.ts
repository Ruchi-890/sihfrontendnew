import mongoose,{Schema,Document,model} from "mongoose";

export interface ISession extends Document {
    patient: {
      id: Schema.Types.ObjectId;
      name?: string;
    };
    therapist: {
      id: Schema.Types.ObjectId;
      name?: string;
    };
    supervisor?: Schema.Types.ObjectId;
    session_details: {
      date: Date;
      time: string;
      duration: number;
      mode: 'In-person' | 'Teletherapy';
      location?: string;
      type: 'Initial' | 'Regular' | 'Follow-up';
    };
    content: {
      goal_id: Schema.Types.ObjectId;
      goal_description?: string;
      activities: {
        name: string;
        description?: string;
        duration?: number;
      }[];
      materials: {
        name: string;
        type?: 'Physical' | 'Online' | 'Other';
        link?: string;
      }[];
    };
    response: {
      level: 'Highly Engaged' | 'Engaged' | 'Disengaged';
      notes?: string;
    };
    observations: {
      behavior?: 'Cooperative' | 'Resistant' | 'Distracted';
      notes?: string;
      performance: {
        metric: 'Accuracy' | 'Fluency' | 'Comprehension';
        rating?: number;
      };
    };
    attendance: {
      status: 'Attended' | 'No-show' | 'Canceled';
      reason_for_absence?: string;
    };
    feedback?: {
      therapist: string;
      supervisor?: string;
    };
    follow_up: {
      next_goal_id?: Schema.Types.ObjectId;
      next_session_plan?: string;
    };
  }
  
  const SessionSchema = new Schema<ISession>({
    patient: {
      id: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
      name: { type: String }
    },
    therapist: {
      id: { type: Schema.Types.ObjectId, ref: 'Therapist', required: true },
      name: { type: String }
    },
    supervisor: { type: Schema.Types.ObjectId, ref: 'Supervisor' },
  
    session_details: {
      date: { type: Date, required: true },
      time: { type: String, required: true },
      duration: { type: Number, required: true },
      mode: { type: String, enum: ['In-person', 'Teletherapy'], required: true },
      location: { type: String },
      type: { type: String, enum: ['Initial', 'Regular', 'Follow-up'], required: true }
    },
  
    content: {
      goal_id: { type: Schema.Types.ObjectId, ref: 'TherapyGoal', required: true },
      goal_description: { type: String },
      activities: [{
        name: { type: String, required: true },
        description: { type: String },
        duration: { type: Number }
      }],
      materials: [{
        name: { type: String },
        type: { type: String, enum: ['Physical', 'Online', 'Other'] },
        link: { type: String }
      }]
    },
  
    response: {
      level: { type: String, enum: ['Highly Engaged', 'Engaged', 'Disengaged'], required: true },
      notes: { type: String }
    },
  
    observations: {
      behavior: { type: String, enum: ['Cooperative', 'Resistant', 'Distracted'] },
      notes: { type: String },
      performance: {
        metric: { type: String, enum: ['Accuracy', 'Fluency', 'Comprehension'], required: true },
        rating: { type: Number, min: 0, max: 100 }
      }
    },
  
    attendance: {
      status: { type: String, enum: ['Attended', 'No-show', 'Canceled'], required: true },
      reason_for_absence: { type: String }
    },
  
    feedback: {
      therapist: { type: String },
      supervisor: { type: String }
    },
  
    follow_up: {
      next_goal_id: { type: Schema.Types.ObjectId, ref: 'TherapyGoal' },
      next_session_plan: { type: String }
    }
  });
  
  const Session = model<ISession>('Session', SessionSchema);
  export default Session;
  