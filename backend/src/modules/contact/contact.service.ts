import { Injectable } from '@nestjs/common';
import { ContactModel } from './contact.model';
import { InjectClient } from 'nest-mysql';
import { Connection } from 'mysql2';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

@Injectable()
export class ContactService {
  imagePath: string = '';

  constructor(@InjectClient() private readonly con: Connection, private config: ConfigService) {
    this.imagePath = config.get('imageSavePath');
  }


  async createAbout(data: ContactModel) {
    const oldData = await this.findAll();

    if (oldData.length == 1)
      return this.con.query('UPDATE `contact` SET `title`=?, `text`=? WHERE id="1"',
        [data.title, data.text, data.id]);
    else
      return this.con.query('INSERT INTO `contact`(`id`, `address`, `email1`, `facebook`, `instagram`, `phone1`, `phone2`, `telegram`, `title`, `text`, `youtube`) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        ["1", data.address, data.email1, data.facebook, data.instagram, data.phone1, data.phone2, data.telegram, data.title, data.text, data.youtube]);
  }


  async createContact(data: ContactModel) {
    const oldData = await this.findAll();

    if (oldData.length == 1)
      return this.con.query('UPDATE `contact` SET `address`=?, `email1`=?, `facebook`=?, `instagram`=?, `phone1`=?, `phone2`=?, `telegram`=?, `youtube`=? WHERE id="1"',
        [data.address, data.email1, data.facebook, data.instagram, data.phone1, data.phone2, data.telegram, data.youtube, data.id]);
    else
      return this.con.query('INSERT INTO `contact`(`id`, `address`, `email1`, `facebook`, `instagram`, `phone1`, `phone2`, `telegram`, `title`, `text`, `youtube`) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        ["1", data.address, data.email1, data.facebook, data.instagram, data.phone1, data.phone2, data.telegram, data.title, data.text, data.youtube]);
  }


  async uploadMainImage(imageName: string) {
    const oldData = await this.findAll();
    const imageUrl = this.imagePath + oldData[0]['mainImage'];
    fs.unlink(imageUrl, (err) => { });

    return this.con.query('UPDATE `contact` SET `mainImage`=? WHERE id="1"', [imageName]);
  }


  async uploadAboutImage(imageName: string) {
    const oldData = await this.findAll();
    const imageUrl = this.imagePath + oldData[0]['aboutImage'];
    fs.unlink(imageUrl, (err) => { });

    return this.con.query('UPDATE `contact` SET `aboutImage`=? WHERE id="1"', [imageName]);
  }


  async findAll() {
    const news = await this.con.query('SELECT * FROM `contact` WHERE id="1"');
    return news[0];
  }
}
