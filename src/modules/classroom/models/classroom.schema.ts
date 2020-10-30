import * as mongoose from 'mongoose';

export interface Classroom{

    grade : string
    classification : string,
    capacity : number,
    created_at : Date,
    updated_at : Date
}

export interface ClassroomDocument extends mongoose.Document , Classroom  {

}


export const ClassroomSchema = new mongoose.Schema({

    grade:String,
    classification: String,
    capacity:Number,

},{
    collection : 'classrooms',
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
})