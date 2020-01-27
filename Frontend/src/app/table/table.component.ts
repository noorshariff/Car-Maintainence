import { Component, OnInit } from '@angular/core';
import { CarserviceService } from '../carservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  searchText;
  getArray:any=[]
editableData={
  _id:null,
  carname:null,
  company:null,
  fueltype:null,
  powersteering:null,
  breaksystem:null,
  showroomprice:null,
  onroadprice:null,
  imageurl:null,
  mileage:null,
  seatingcapacity:null,
  enginecapacity:null,
  geartype:null,
  }

  constructor(private service:CarserviceService) { 
    this.getCompponentData()
  }




  getCompponentData(){
    this.service.getServiceData().subscribe(data=>{
      this.getArray=data;
      console.log(data,"Getting data")
    },err=>{
      console.log(err)
    },()=>{
      console.log("getting data successfully");
    })
  }

editeComponentData(data){
  console.log(data,"Editable data");
  this.editableData=data;

}

saveChanges(details){
  console.log(details, "updated data");
  this.service.updateServiceData(details).subscribe(data=>{
    console.log(data);
  },err=>{
    console.log(err);
  },()=>{
    console.log("Updated Successfully")
  })
}


deleteComponentData(id){
  console.log(id);
  this.service.deleteServiceData(id).subscribe(data=>{

    console.log(data);
    this.getCompponentData()
  },err=>{
    console.log(err)
  },()=>{
    console.log("Deleted Successfully")
  })
}


  ngOnInit() {
  }

}
