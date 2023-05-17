import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetDataService } from '../../services/get-data.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent {
  getDataService = inject(GetDataService);
  carIdService = inject(MessageService);


  car$: any = this.getDataService.car();
  id: number = 0;


  ngOnInit(): void {
    this.carIdService.getCarId().subscribe((res) => this.id = res);
  }


  send(form: NgForm) {

    let data = {
      name: form.value.name,
      phone: form.value.phone,
      message: '',
      car_id: (form.value.car_id == '' || form.value.car_id == null) ? this.id : form.value.car_id,
    };

    this.carIdService.sendMessage(data).subscribe(() => form.reset());
  }
}
