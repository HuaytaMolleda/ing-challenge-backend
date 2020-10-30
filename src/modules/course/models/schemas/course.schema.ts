import * as mongoose from 'mongoose';


export interface Course{
    name:string;
    area:string;
    created_at:Date,
    updated_at:Date
}


export interface CourseDocument extends Course, mongoose.Document{

}


export const CourseSchema = new mongoose.Schema({
    name:String,
    area:String
},{
    collection : 'courses',
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
})