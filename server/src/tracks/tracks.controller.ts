import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { TracksService } from './tracks.service';
import { CreateTrackDto } from './dto/CreateTrackDto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('tracks')
export class TracksController {
  constructor(private trackService: TracksService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  create(@UploadedFiles() files, @Body() trackDto: CreateTrackDto) {
    const { picture, audio } = files;
    return this.trackService.create(trackDto, picture[0], audio[0]);
  }

  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.trackService.getAll(count, offset);
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
