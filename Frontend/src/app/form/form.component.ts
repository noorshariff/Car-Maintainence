import { Component, OnInit } from '@angular/core';
import { CarserviceService } from '../carservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  postArray: any = []
  constructor(private service: CarserviceService,private router:Router) { 
    
  }

  submit(carForm) {
    console.log(carForm);
    this.service.postServiceData(carForm).subscribe(data => {
      this.postArray = data;
      console.log(this.postArray, "component data");
      this.router.navigate(['/table'])
    }, err => {
      console.log(err)
    }, () => {
      console.log("posting successfully completed");
    })
  }













  ngOnInit() {
  }


}
