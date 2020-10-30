import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import {MongooseModule} from "@nestjs/mongoose";
import {COURSE_MODEL} from "./course.constants";
import {CourseSchema} from "./models/schemas/course.schema";

@Module({
  imports: [MongooseModule.forFeature([{name : COURSE_MODEL , schema : CourseSchema}])],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}
