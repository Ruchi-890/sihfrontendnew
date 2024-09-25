import mongoose, { Schema, model, Document } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

// Patient Info Interface
export interface IPatient extends Document {
    first_name: string;
    last_name: string;
    date_of_birth: Date;
    gender: 'Male' | 'Female' | 'Transgender';
    nationality: string;
    preferred_language?: string;
    contact: {
        address_line_1: string;
        address_line_2?: string;
        city: string;
        state: string;
        postal_code: string;
        country: string;
        primary_phone: string;
        secondary_phone: string;
        email: string;
    };
    emergency_contact?: {
        name?: string;
        relationship?: string;
        phone: string;
        email?: string;
    };
    referral: {
        referred_by: 'Therapist' | 'Self' | 'Other';
        therapist_name?: string;
        therapist_contact?: string;
        primary_reason?: string;
    };
    medical_history?: {
        documents?: { filename: string; filetype: string }[];
        allergies?: { name: string; reaction?: string }[];
    };
    family_history?: string;
    social_history?: {
        occupation?: string;
        smoking_status?: 'Never' | 'Former' | 'Current';
        alcohol_use?: 'Never' | 'Occasionally' | 'Frequently';
        physical_activity?: 'Sedentary' | 'Moderate' | 'Active';
    };
    consent_to_treat: boolean;
    consent_date: Date;
    agree_to_privacy_policy: boolean;
}

const PatientSchema: Schema<IPatient> = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Transgender'],
        required: true
    },
    nationality: {
        type: String,
        default: 'India',
        required: true
    },
    preferred_language: {
        type: String
    },

    contact: {
        email: {
            type: String,
            required: true
        },
        address_line_1: {
            type: String,
            required: true
        },
        address_line_2: {
            type: String
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        postal_code: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        primary_phone: {
            type: String,
            required: true
        },
        secondary_phone: {
            type: String,
            required: true
        },
    },

    emergency_contact: {
        name: {
            type: String
        },
        relationship: {
            type: String
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String
        }
    },

    referral: {
        referred_by: {
            type: String,
            enum: ['Therapist', 'Self', 'Other'],
            required: true
        },
        therapist_name: {
            type: String
        },
        therapist_contact: {
            type: String,
            match: /^[0-9]{10}$/
        },
        primary_reason: {
            type: String,
            maxlength: 50
        }
    },

    medical_history: {
        documents: [{
            filename: String,
            filetype: String
        }],
        allergies: [{
            name: String,
            reaction: String
        }]
    },

    family_history: {
        type: String,
        maxlength: 1500
    },

    social_history: {
        occupation: {
            type: String
        },
        smoking_status: {
            type: String,
            enum: ['Never', 'Former', 'Current']
        },
        alcohol_use: {
            type: String,
            enum: ['Never', 'Occasionally', 'Frequently']
        },
        physical_activity: {
            type: String,
            enum: ['Sedentary', 'Moderate', 'Active']
        }
    },

    consent_to_treat: {
        type: Boolean,
        required: true
    }
    ,
    consent_date: {
        type: Date,
        required: true
    },
    agree_to_privacy_policy: {
        type: Boolean,
        default: true
    }
});


PatientSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
  
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });
  
  PatientSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  PatientSchema.methods.generateAccessToken = function () {
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET_KEY;
    const accessTokenExpiry = process.env.ACCESS_TOKEN_EXPIRY_SECRET_KEY;
  
    if (!accessTokenSecret) {
      throw new Error("No access token secret key provided");
    }
  
    return jwt.sign(
      {
        id: this._id,
        email: this.email,
        fullName: this.fullName,
        role: this.role
      },
      accessTokenSecret,
      {
        expiresIn: accessTokenExpiry || "1h",
      }
    );
  };
  
  PatientSchema.methods.generateRefreshToken = function () {
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET_KEY;
    const refreshTokenExpiry = process.env.REFRESH_TOKEN_EXPIRY_SECRET_KEY;
  
    if (!refreshTokenSecret) {
      throw new Error("No refresh token secret key provided");
    }
  
    return jwt.sign(
      {
        id: this._id,
      },
      refreshTokenSecret,
      {
        expiresIn: refreshTokenExpiry || "7d",
      }
    );
  };
  
  PatientSchema.methods.incrementFailedLogins = async function () {
    this.failedLoginAttempts += 1;
    if (this.failedLoginAttempts >= 5) {
      this.isLocked = true;
      this.lockoutTime = Date.now(); // Add a timestamp for lockout
    }
    await this.save();
  };
  
  // Method to unlock the account (could be manual or after a period of time)
  PatientSchema.methods.unlockAccount = function () {
    if (this.isLocked && Date.now() - this.lockoutTime >= 15 * 60 * 1000) { // 15 mins lockout period
      this.isLocked = false;
      this.failedLoginAttempts = 0;
      this.lockoutTime = null;
    }
  };
  
  PatientSchema.methods.isPatient=function(){
    return this.role === "Patient";
  }  

export const Patient = mongoose.models || mongoose.model<IPatient>('Patient', PatientSchema);

