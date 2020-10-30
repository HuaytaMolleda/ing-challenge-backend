import { Injectable } from '@nestjs/common';
import {COURSE_MODEL} from "./course.constants";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CourseDocument} from "./models/schemas/course.schema";

@Injectable()
export class CourseService {

    constructor(@InjectModel(COURSE_MODEL) private readonly  courseModel  : Model<CourseDocument> ) {
    }



}
