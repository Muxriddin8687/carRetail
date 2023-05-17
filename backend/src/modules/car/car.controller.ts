import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator } from '@nestjs/common';
import { CarService } from './car.service';
import { CarModel } from './car.model';
import LocalFilesInterceptor from 'src/core/localFiles.interceptor';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}


  @Post('upload/:id')
  @UseInterceptors(
    LocalFilesInterceptor({ fieldName: 'image', path: 'car/' })
  )
  upload(
    @Param('id') id: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }),
        ],
      })
    ) image: Express.Multer.File) {
    return this.carService.uploadImage(+id, image.filename);
  }


  @Delete('image')
  deleteImage(@Query('imageName') imageName: string) {
    return this.carService.deleteImage(imageName);
  }


  @Post()
  create(@Body() createCar: CarModel) {
    return this.carService.create(createCar);
  }


  @Get()
  findAll() {
    return this.carService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCar: CarModel) {
    return this.carService.update(+id, updateCar);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carService.remove(+id);
  }


}
