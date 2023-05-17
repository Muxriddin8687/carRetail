import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  http = inject(HttpClient);
  api = environment.api;
  car_id: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  sendMessage(form: any) {
    return this.http.post(this.api + 'message', form);
  }


  selectCarId(id: number) {
    this.car_id.next(id);
  }


  getCarId() {
    return this.car_id.asObservable();
  }
}
