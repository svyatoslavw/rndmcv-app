import { PrismaService } from "@/prisma.service"
import { UserService } from "@/user/user.service"
import { Injectable, NotFoundException } from "@nestjs/common"
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

  async getByUserId(id: string) {
    const user = await this.userService.getById(id)
    console.log("@user", user)
    if (!user) throw new NotFoundException("User not found")

    return await this.prisma.resume.findMany({
      where: { userId: user.id },
      select: returnResumeObject
    })
  }

  async create(id: string, dto: CreateResumeDto) {
    return await this.prisma.resume.create({
      select: {
        id: true,
        general: true,
        customization: true
      },
      data: {
        customization: JSON.parse(dto.customization),
        general: JSON.parse(dto.general),
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
