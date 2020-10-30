import {Controller, Get, Query} from '@nestjs/common';
import {StudentService} from "./student.service";
import {ApiTags} from "@nestjs/swagger";


@ApiTags('Estudiantes')
@Controller('student')
export class StudentController {

    constructor(private readonly studentService : StudentService) {

    }



    @Get('find-student-by-id')
    findById(@Query('id')  id: string){
        return this.studentService.findById(id)
    }

}
