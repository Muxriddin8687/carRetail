import { Component, inject, ViewEncapsulation } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
declare let initHeadline: any;

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainBarComponent {
  getDataService = inject(GetDataService);

  mainImage: string = './assets/images/1.jpg';

  ngOnInit(): void {
    this.getDataService.contact().subscribe((data: ContactModal[]) => {
      if(data[0]?.mainImage.length > 4) {
        this.mainImage = './assets/images/' + data[0]?.mainImage;
      } else {
        this.mainImage = './assets/images/1.jpg';
      }
    });
  }

  ngAfterViewInit(): void {
    initHeadline();
  }
}

export interface ContactModal {
  id: number,
  address: string,
  phone1: string,
  phone2: string,
  email1: string,
  telegram: string,
  instagram: string,
  facebook: string,
  youtube: string,
  title: string,
  text: string,
  mainImage: string,
  aboutImage: string,
}
