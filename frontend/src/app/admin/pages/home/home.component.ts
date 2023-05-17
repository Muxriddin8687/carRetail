import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  http = inject(HttpClient);
  api = environment.api + 'contact';
  imgUrl = './assets/images/';

  // short about us form propertys
  title: String = '';
  text: String = '';
  image: any = null;

  main_image: any = null;


  ngOnInit(): void {
    this.load();
  }


  // load all data from backend
  load() {
    this.http
        .get(this.api)
        .subscribe( (res: any) => {
          this.title = res[0]['title'];
          this.text = res[0]['text'];
          this.image = res[0]['aboutImage'];
          this.main_image = res[0]['mainImage'];
        });
  }


  // image upload for main bar section
  onFileChange(event: any) {
    let formData = new FormData();
    formData.append('image', event.target.files[0], event.target.files[0].name);

    this.http
        .post(`${this.api}/mainImage`, formData)
        .subscribe(res => {
          this.load();
        });
  }



  // image upload for about section
  onFileChangeAbout(event: any) {
    let formData = new FormData();
    formData.append('image', event.target.files[0], event.target.files[0].name);

    this.http
        .post(`${this.api}/aboutImage`, formData)
        .subscribe(res => {
          this.load();
        });
  }


  // save about title and text
  saveMainData(form: NgForm) {
    this.http
        .post(`${this.api}/about`, form.value)
        .subscribe(res => {
          this.load();
        });
  }

}
