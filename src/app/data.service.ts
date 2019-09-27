import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

	baseurl = "http://127.0.0.1:8000";
	httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
	address = ''

  constructor(private http: HttpClient) { }

  getAllOfficials(): Observable<any> {
  	return this.http.get(this.baseurl + '/wikipol/test/officials',
  	{headers: this.httpHeaders})
  }

     findAddress(param){
     	// this.address = param.search;
     	// console.log(this.address);
  		return this.http.get(
	  		this.baseurl + '/wikipol1/test/searc/?search='+ encodeURI(param),
	  		{headers: this.httpHeaders}
  		)

	} 
}





