import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import {MongooseModule} from "@nestjs/mongoose";
import {STUDENT_MODEL} from "./student.constants";
import {StudentSchema} from "./models/schemas/student.schema";
import {ClassroomSchema} from "../classroom/models/classroom.schema";
import {CLASSROOM_MODEL} from "../classroom/classroom.constants";

@Module({
  imports : [MongooseModule.forFeature([{ name : CLASSROOM_MODEL, schema : ClassroomSchema  } ,{name : STUDENT_MODEL, schema : StudentSchema}])],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
