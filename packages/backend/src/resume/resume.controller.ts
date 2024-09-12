import { Auth } from "@/auth/decorators/auth.decorator"
import { CurrentUser } from "@/auth/decorators/user.decorator"
import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common"
import { ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger"
import { CreateResumeDto } from "./dto/create-resume.dto"
import { UpdateResumeDto } from "./dto/update-resume.dto"
import { ResumeType } from "./entities/resume.entity"
import { ResumeService } from "./resume.service"

@ApiTags("Resumes")
@Controller("resumes")
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @ApiResponse({ status: 200, type: ResumeType })
  @ApiParam({ name: "id", type: String, description: "Resume id" })
  @Get(":id")
  async getById(@Param("id") id: string) {
    return this.resumeService.getById(id)
  }

  @Post()
  @Auth()
  async create(@CurrentUser("id") id: string, @Body() dto: CreateResumeDto) {
    return this.resumeService.create(id, dto)
  }

  @Patch(":id")
  @Auth()
  async update(@CurrentUser("id") id: string, @Body() dto: UpdateResumeDto) {
    return this.resumeService.update(id, dto)
  }
}
