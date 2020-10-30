import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { ClassroomController } from './classroom.controller';
import { ClassroomService } from './classroom.service';
import {CLASSROOM_MODEL} from "./classroom.constants";
import {ClassroomSchema} from "./models/classroom.schema";

@Module({
    imports : [MongooseModule.forFeature([{schema : ClassroomSchema, name : CLASSROOM_MODEL }])],
    controllers: [ClassroomController],
    providers: [ClassroomService]
})
export class ClassroomModule {}
