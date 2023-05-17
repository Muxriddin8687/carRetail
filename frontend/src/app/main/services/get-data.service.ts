import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  http = inject(HttpClient);
  api = environment.api;

  private readonly car$$ = new BehaviorSubject([]);
  private readonly contact$$ = new BehaviorSubject([]);


  load() {
    this.http.get(this.api + 'car').subscribe((res: any) => this.car$$.next(res));
    this.http.get(this.api + 'contact').subscribe((res: any) => this.contact$$.next(res));
  }


  car() {
    return this.car$$.asObservable();
  }


  contact() {
    return this.contact$$.asObservable();
  }
}
