import { Component, inject } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  getDataService = inject(GetDataService);
  http = inject(HttpClient);
  api = environment.api + 'message';

  contact$: any = this.getDataService.contact();
  success: boolean = false;

  send(form: NgForm) {

    let data = {
      name: form.value.name,
      phone: form.value.phone,
      message: form.value.message,
      car_id: 0,
    };

    this.http.post(this.api, data).subscribe((res) => {
      this.success = true;
      form.reset();
    });
  }
}
