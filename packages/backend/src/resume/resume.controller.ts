import { Controller } from "@nestjs/common"
import { ResumeService } from "./resume.service"

@Controller("resume")
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}
}