import mongoose, { Schema, Document, model } from "mongoose";

interface IProgressReport extends Document {
    report_id: number;
    patient: Schema.Types.ObjectId;
    report_start_date: Date;
    report_end_date: Date;
    report_date: Date;
    progress_summary: {
        goals: {
            id: Schema.Types.ObjectId;
            description?: string;
            progress: string;
            rating: 'Met' | 'Partially Met' | 'Not Met';
        }[];
        performance: {
            metric: 'Accuracy' | 'Fluency' | 'Comprehension';
            score: number;
        }[];
    };
    clinical_outcome: {
        rating: 'Improved' | 'Same' | 'Worsened';
        description: string;
    };
}

const ProgressReportSchema = new Schema<IProgressReport>({
    report_id: {
        type: Number,
        required: true
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    report_start_date: {
        type: Date,
        required: true
    },
    report_end_date: {
        type: Date,
        required: true
    },
    report_date: {
        type: Date,
        required: true
    },

    progress_summary: {
        goals: [{
            id: {
                type: Schema.Types.ObjectId,
                ref: 'TherapyGoal',
                required: true
            },
            description: {
                type: String
            },
            progress: {
                type: String,
                required: true
            },
            rating: {
                type: String,
                enum: ['Met', 'Partially Met', 'Not Met'],
                required: true
            }
        }],
        performance: [{
            metric: {
                type: String,
                enum: ['Accuracy', 'Fluency', 'Comprehension'],
                required: true
            },
            score: {
                type: Number,
                required: true
            }
        }]
    },

    clinical_outcome: {
        rating: {
            type: String,
            enum: ['Improved', 'Same', 'Worsened'],
            required: true
        },
        description: {
            type: String,
            required: true

        }
    }
});

const ProgressReport = mongoose.models.ProgressReport || model<IProgressReport>('ProgressReport', ProgressReportSchema);