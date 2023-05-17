import { Component, inject } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-cotolog',
  templateUrl: './cotolog.component.html',
  styleUrls: ['./cotolog.component.scss']
})
export class CotologComponent {
  getDataService = inject(GetDataService);
  carIdService = inject(MessageService);

  car$: any = this.getDataService.car();
}
