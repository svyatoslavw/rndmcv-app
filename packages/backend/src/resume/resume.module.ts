import { Module } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { ResumeController } from './resume.controller';

@Module({
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
