import mongoose,{Schema,Document, SchemaType}  from "mongoose";


export interface Message extends Document{
    fullName:string;
    email:string;
    phoneNumber?:number;
    message:string;
}


const userMessageSchema:Schema<Message>=new Schema({
    fullName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50,

    },
    email:{
        type:String,
        required:true,
        match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        trim:true,

    },
    phoneNumber:{
        type:Number,
        required:false,
        minlength:10,
        maxlength:15,
        validate:{
            validator: (value:number) => value > 0,
            message: 'Please enter a valid phone number'
        },
        trim:true,
    },
    message:{
        type:String,
        required:true,
        minlength:10,
        maxlength:500,

    }
},{timestamps:true})

export const Message= mongoose.models.Message || mongoose.model<Message>("Message",userMessageSchema);