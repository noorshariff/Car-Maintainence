import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {
url="http://localhost:5000"
  constructor( private http:HttpClient) {}


postServiceData(carForm){
  console.log(carForm,"service data")
  return this.http.post(`${this.url}/cardata`,carForm)
}

getServiceData(){
  return this.http.get(`${this.url}/getData`)
}
 updateServiceData(details){
   return this.http.post(`${this.url}/update`,details);
 }

 deleteServiceData(id){
   return this.http.delete(`${this.url}/delete/${id}`,id)

 }

}
