import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private headers: HttpHeaders = new HttpHeaders();

  // baseurl = "http://127.0.0.1:8000"
	baseurl = "http://18.216.93.112:8000";
	private httpHeaders = new HttpHeaders()
	address = ''

  constructor(private http: HttpClient) { 
      this.headers = this.headers.append('Accept', 'application/json');
    this.headers = this.headers.append(  'Content-Type',  'application/json');
  }

  getAllOfficials(): Observable<any> {
  	return this.http.get(this.baseurl + '/wikipol1/test/officials',
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

  submitMessage(data){
    console.log(JSON.stringify(data));
    return this.http.post(this.baseurl + '/wikipol1/petition/',
      JSON.stringify(data),
      {headers:this.headers}

  // sendmessage(formValue){
  //   const headers = new HttpHeaders()
  //   headers.append('Content-Type', 'application/json')
  //   return this.http.post(this.baseurl + 'wikipol1/test/officials', formValue, {headers})
      
    )
    
  }

}





