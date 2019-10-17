import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import $ from "jquery";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public message: string = '';
  // public profileForm: FormGroup;

  constructor (private dataservice:DataService) {}
    


  // constructor() {this.profileForm = new FormGroup({
  //   Message: new FormControl('',[
  //     Validators.required ])})}

  ngOnInit() {
    // this.profileForm = {
    //   message: ''
    // }
    // this.profileForm = new FormGroup({
    //   message: new FormControl(''),
    // });
  }

submitMessage(){
  console.log(this.message)
  this.dataservice.submitMessage(this.message).subscribe(
   data=>{console.log(data)},error=>{console.log(error)})

}
  // }
    // console.log(this.profileForm.get('message').value)
    // response => {
    //   alert('You will be notified when your message has been sent')
    
    // error => console.log(error)

    
}
  // onSubmit() {
  //   console.log(this.profileForm.value);
  //   this.dataservice.submitMessage(this.profileForm.value).subscribe(
  //     response => {
  //       alert('Sucessful')
  //   },
  //   error => console.log('error')
   
  // )
  //     // data=>{console.log(data)},error=>{console.log(error)})
  // }



  


