import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { DataService } from "../data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import $ from "jquery";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('moreText', {static: false}) more: ElementRef;
  public message: string = '';
  // public profileForm: FormGroup;

  constructor (private dataservice:DataService) {}
    


  // constructor() {this.profileForm = new FormGroup({
  //   Message: new FormControl('',[
  //     Validators.required ])})}

  ngOnInit() {
    // this.myFunction()
    // console.log('after click')

    // this.profileForm = {
    //   message: ''
    // }
    // this.profileForm = new FormGroup({
    //   message: new FormControl(''),
    // });
  }

  ngAfterViewInit(){
    this.more.nativeElement.style.display = "none"
    console.log(this.more)
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
//    myFunction() {
//       var dots = document.getElementById("dots");
//       var moreText = document.getElementById("more");
//       var btnText = document.getElementById("myBtn");

//       if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more"; 
//         moreText.style.display = "none";

//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less"; 
//       moreText.style.display = "inline";
//   }
// }
    
    readMore(dots, moreText, btnText) {
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";

      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
      }
    
    }
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



  


