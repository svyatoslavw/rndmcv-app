import { Injectable, NotFoundException } from "@nestjs/common"
import { hash } from "argon2"
import { PrismaService } from "src/prisma.service"
import { UpdateUserDto } from "./dto/user.dto"
import { returnUserObject } from "./entities/user.entity"

@Injectable()
export class UserService {
  LOGIN_DATE_EXPIRE = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)

  constructor(private prisma: PrismaService) {}

  async getAll() {
    const users = await this.prisma.user.findMany({
      select: returnUserObject
    })
    if (!users) throw new NotFoundException("Users not found")
    return users
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      },
      select: returnUserObject
    })

    if (!user) throw new NotFoundException("User with this id not found")
    return user
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email
      },
      select: returnUserObject
    })
  }

  async findByEmailWithPassword(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email
      },
      select: {
        ...returnUserObject,
        password: true
      }
    })
  }

  async getProfile(id: string) {
    return this.findById(id)
  }

  async updateLastLoginDateById(id: string) {
    const user = await this.findById(id)

    if (!user) throw new NotFoundException("User not found")

    return this.prisma.user.update({
      where: { id: user.id },
      data: {
        loggedAt: this.LOGIN_DATE_EXPIRE
      }
    })
  }

  async update(dto: UpdateUserDto, id: string) {
    const user = await this.findById(id)

    if (!user) throw new NotFoundException("User not found")

    return this.prisma.user.update({
      where: { id: user.id },
      data: {
        login: dto.login,
        email: dto.email,
        password: await hash(dto.password)
      }
    })
  }
}
