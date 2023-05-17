import { Injectable } from '@nestjs/common';
import { InjectClient } from 'nest-mysql';
import { Connection } from 'mysql2';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import { CarModel } from './car.model';

@Injectable()
export class CarService {
    imagePath = '';

    constructor(
        @InjectClient() private readonly con: Connection,
        private config: ConfigService
    ) {
        this.imagePath = config.get('imageSavePath') + "car/";
    }


    async create(data: CarModel) {
        return this.con.query('INSERT `car`(`name`, `text`) VALUES (?, ?)', [data.name, data.text]);
    }


    async findAll() {
        const cars = await this.con.query('SELECT * FROM `car` ORDER BY `date` DESC');
        const images = await this.con.query('SELECT * FROM `image`');

        let car = cars[0];
        let image = images[0]

        let newArrar: Array<any> = [];
        for (let i = 0; i < car.length; i++) {
            let data = {
                id: car[i]['id'],
                name: car[i]['name'],
                text: car[i]['text'],
                images: []
            };
            image.forEach(item => {
                if (item.car_id == car[i]['id'])
                    data.images.push(item.imageName);
            });
            image.map(item => item.car_id != car[i]['id']);
            newArrar.push(data);
        }

        return newArrar;
    }


    async findOne(id: number) {
        const cars = await this.con.query('SELECT * FROM `car` WHERE id=?', id);
        const images = await this.con.query('SELECT * FROM `image` WHERE car_id=?', id);

        let car = cars[0];
        let image = images[0]

        let newArrar: Array<any> = [];
        for (let i = 0; i < car.length; i++) {
            let data = {
                id: car[i]['id'],
                name: car[i]['name'],
                text: car[i]['text'],
                images: []
            };
            image.forEach(item => {
                if (item.car_id == car[i]['id'])
                    data.images.push(item.imageName);
            });
            newArrar.push(data);
        }

        return newArrar;
    }


    async update(id: number, data: CarModel) {
        return await this.con
            .query('UPDATE `car` SET `name`=?, `text`=? WHERE id=?',
                [data.name, data.text, id]);
    }


    async remove(id: number) {
        return await this.con.query('DELETE FROM `car` WHERE `id`=?', id);
    }


    async uploadImage(id: number, image: string) {
        return this.con.query('INSERT `image`(`imageName`, `car_id`) VALUES (?, ?)', [image, id]);
    }


    async deleteImage(imageName: string) {
        await this.con.query('DELETE FROM `image` WHERE `imageName`=?', imageName);
        fs.unlink(this.imagePath + imageName, (err) => { });
        return true;
    }

}  
