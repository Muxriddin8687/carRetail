import { Injectable } from '@nestjs/common';
import { MessageModel } from './message.model';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';

@Injectable()
export class MessageService {

  constructor(@InjectClient() private readonly con: Connection) { }


  async create(data: MessageModel) {
    return await this.con.query('INSERT INTO `message`(`name`, `car_id`, `phone`, `message`) VALUES( ?, ?, ?, ?)',
      [data.name, data.car_id, data.phone, data.message]);
  }


  async findAll() {
    const messages = await this.con.query('SELECT m.*, IF(m.id=0, \'\', (SELECT c.name FROM `car` AS c WHERE c.id=m.car_id)) AS car_name FROM `message` AS m ORDER BY `date` DESC');
    return messages[0];
  }


  async remove(id: number) {
    return await this.con.query('DELETE FROM `message` WHERE id=?', id);;
  }
}