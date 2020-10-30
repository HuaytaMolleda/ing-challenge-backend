import { Injectable } from '@nestjs/common';
import {STUDENT_MODEL} from "./student.constants";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {StudentDocument} from "./models/schemas/student.schema";
import {from} from "rxjs";

@Injectable()
export class StudentService {

    constructor(@InjectModel(STUDENT_MODEL)  private readonly  studentModel  : Model<StudentDocument>) {

    }

    findById( id  :string){
        return from(this.studentModel.findById(id))

    }


}
