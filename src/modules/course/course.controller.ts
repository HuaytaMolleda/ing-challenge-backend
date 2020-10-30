import { Controller } from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";


@ApiTags('Cursos')
@Controller('course')
export class CourseController {

    constructor(private readonly courseController : CourseController) {
    }

}
