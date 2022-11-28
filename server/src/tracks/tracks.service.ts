import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Track } from './tracks.model';
import { CreateTrackDto } from './dto/CreateTrackDto';

@Injectable()
export class TracksService {
  constructor(@InjectModel(Track) private trackRepository: typeof Track) {}

  async create(dto: CreateTrackDto) {
    const track = await this.trackRepository.create(dto);
    return track;
  }

  async getAll() {
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
