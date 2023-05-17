import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../../services/get-data.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent {
  getDataService = inject(GetDataService);
  route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');
  imgPath: string = './assets/images/car/';
  car: Array<any> = [];

  ngOnInit(): void {
    this.getDataService
      .car()
      .pipe(map(item => item.filter((i: any) => i.id == this.id)))
      .subscribe(res => this.car = res);
  }
}
