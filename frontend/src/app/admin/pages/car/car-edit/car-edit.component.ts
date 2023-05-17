import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environments';


@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss']
})
export class CarEditComponent {
  http = inject(HttpClient);
  router = inject(Router);
  route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');
  api = environment.api + 'car';
  imagePath = './assets/images/car/';


  // member propertys
  car: any;
  name: String = '';
  text: String = '';
  image: String = '';


  load() {
    if (this.id != '0')
      this.http.get(this.api + '/' + this.id).subscribe(
        (res: any) => {
          if(res.length != 0) {
            this.name = res[0]['name'];
            this.text = res[0]['text'];
            this.image = res[0]['images'];
          } else
            this.router.navigateByUrl("/admin/car");
        },
        (err) => this.router.navigateByUrl("/admin/car")
      );
  }


  // image upload for member
  onFileChange(event: any) {
    let formData = new FormData();
    formData.append('image', event.target.files[0], event.target.files[0].name);

    this.http
      .post(`${this.api}/upload/${this.id}`, formData)
      .subscribe(res => {
        this.load();
      });
  }


  deleteImage(imageName: string) {
    this.http.delete(this.api + '/image?imageName=' + imageName).subscribe((res) => this.load());
  }


  update(form: NgForm) {
    this.http.patch(this.api + '/' + this.id, form.value).subscribe((res) => {
      this.router.navigateByUrl("/admin/car");
    });
  }


  ngOnInit(): void {
    this.load();
  }
}
