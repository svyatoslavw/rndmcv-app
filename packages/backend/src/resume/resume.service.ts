import { PrismaService } from "@/prisma.service"
import { UserService } from "@/user/user.service"
import { Injectable } from "@nestjs/common"
import { CreateResumeDto } from "./dto/create-resume.dto"
import { UpdateResumeDto } from "./dto/update-resume.dto"
import { returnResumeObject } from "./entities/resume.entity"

@Injectable()
export class ResumeService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService
  ) {}

  async getAll() {
    return await this.prisma.resume.findMany({ select: returnResumeObject })
  }

  async getById(id: string) {
    return await this.prisma.resume.findUnique({ where: { id }, select: returnResumeObject })
  }

  async create(id: string, dto: CreateResumeDto) {
    console.log(dto)

    console.log(dto.customization)
    console.log(dto.general)

    return await this.prisma.resume.create({
      select: returnResumeObject,
      data: {
        customization: dto.customization,
        general: dto.general,
        user: { connect: { id } }
      }
    })
  }

  async update(id: string, dto: UpdateResumeDto) {
    return await this.prisma.resume.update({
      select: returnResumeObject,
      where: { id: dto.id, AND: { user: { id } } },
      data: {
        general: dto.general,
        customization: dto.customization
      }
    })
  }

  async delete(id: string) {
    return this.prisma.resume.delete({ where: { id } })
  }
}
