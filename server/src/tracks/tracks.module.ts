import { Module } from '@nestjs/common';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Track } from './tracks.model';

@Module({
  controllers: [TracksController],
  providers: [TracksService],
  imports: [SequelizeModule.forFeature([Track])],
})
export class TracksModule {}
