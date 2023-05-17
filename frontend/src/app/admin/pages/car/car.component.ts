import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  http = inject(HttpClient);
  api = environment.api + 'car';
  carList: any;


  load() {
    this.http.get(this.api).subscribe(res => this.carList = res);
  }


  delete(id: number) {
    this.http.delete(this.api + '/' + id).subscribe((res) => {
      this.load();
    });
  }


  save(form: NgForm) {
    this.http.post(this.api, form.value).subscribe((res) => {
      this.load();
      form.reset();
    });
  }



  ngOnInit(): void {
    this.load();
  }
}
