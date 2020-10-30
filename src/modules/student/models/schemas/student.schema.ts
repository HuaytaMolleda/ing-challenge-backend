import * as mongoose from 'mongoose';
import {ClassroomDocument, ClassroomSchema} from "../../../classroom/models/classroom.schema";

export interface Student{

    firstname : string
    lastname : string,
    age : number,
    email : string,
    password : string,
    birthday : Date,
    classroom : ClassroomDocument
    created_at : Date,
    updated_at : Date,
}

export interface StudentDocument extends mongoose.Document , Student  {

}


export const StudentSchema = new mongoose.Schema({

    firstname:String,
    lastname: String,
    birthday : Date,
    age:Number,
    email:String,
    status :String,
    password:String,
    classroom : ClassroomSchema

},{
    collection:'students',
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
})