import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { CreateTrackDto } from './dto/CreateTrackDto';

@Controller('tracks')
export class TracksController {
  constructor(private trackService: TracksService) {}

  @Post()
  create(@Body() trackDto: CreateTrackDto) {
    return this.trackService.create(trackDto);
  }

  @Get()
  getAll() {
    return this.trackService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.trackService.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.trackService.delete(id);
  }
}
