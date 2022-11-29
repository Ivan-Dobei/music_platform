import { Module } from '@nestjs/common';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Track } from './tracks.model';
import { FileService } from '../file/file.service';

@Module({
  controllers: [TracksController],
  providers: [TracksService, FileService],
  imports: [SequelizeModule.forFeature([Track])],
})
export class TracksModule {}
