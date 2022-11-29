import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Track } from './tracks.model';
import { CreateTrackDto } from './dto/CreateTrackDto';
import { FileService, FileType } from '../file/file.service';

@Injectable()
export class TracksService {
  constructor(
    @InjectModel(Track) private trackRepository: typeof Track,
    private fileService: FileService,
  ) {}

  async create(dto: CreateTrackDto, picture, audio) {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const track = await this.trackRepository.create({
      ...dto,
      picture: picturePath,
      audio: audioPath,
    });
    return track;
  }

  async getAll(count = 10, offset = 0) {
    const tracks = await this.trackRepository.findAll();
    return tracks;
  }

  async getOne(id: number) {
    const track = await this.trackRepository.findOne({ where: { id } });
    return track;
  }

  async delete(id: number) {
    const track = await this.trackRepository.destroy({ where: { id } });
    return track;
  }
}
