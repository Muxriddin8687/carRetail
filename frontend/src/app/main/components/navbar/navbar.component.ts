import { Component, inject } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  getDataService = inject(GetDataService);

  phone1: string = '';
  
  ngOnInit(): void {
    this.getDataService.contact().subscribe((res: any) => {
      this.phone1 = res[0]?.phone1;
    });
  }
}
