import { Controller, Get, Post, Body, UploadedFile, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator, UseInterceptors } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactModel } from './contact.model';
import LocalFilesInterceptor from 'src/core/localFiles.interceptor';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  // bunga 1 dona img upload qiliwni qowiw garak
  @Post()
  createContact(@Body() createContactDto: ContactModel) {
    return this.contactService.createContact(createContactDto);
  }


  @Post('about')
  createAbout(@Body() createContactDto: ContactModel) {
    return this.contactService.createAbout(createContactDto);
  }


  @Post('mainImage')
  @UseInterceptors(
    LocalFilesInterceptor({ fieldName: 'image', path: ''})
  )
  uploadMainImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }),
        ],
      })
    ) image: Express.Multer.File) {
    return this.contactService.uploadMainImage(image.filename);
  }


  @Post('aboutImage')
  @UseInterceptors(
    LocalFilesInterceptor({ fieldName: 'image', path: ''})
  )
  uploadAboutImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }),
        ],
      })
    ) image: Express.Multer.File) {
    return this.contactService.uploadAboutImage(image.filename);
  }


  @Get()
  findAll() {
    return this.contactService.findAll();
  }

}
