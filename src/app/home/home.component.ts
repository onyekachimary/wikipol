import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  private address: string;
  public search_text:string;
  officials = [];

  constructor(private router: Router, public dataservice: DataService) {
    console.log(router.navigate);
  //   this.getOfficials();
  // }
  // getOfficials = () => {
  //   this.dataservice.getAllOfficials().subscribe(
  //     data => {
  //       this.officials = data;

  //     },
  //     error => {
  //       console.log(error);

  //     }

  //     )
  }

  ngOnInit() {

  }

  // NavigationExtras

  findAddress(event) {
    event.preventDefault();
    
    const queryParams = { search: this.search_text };

    this.router.navigate(['display'], { queryParams });
  }

  updateAddress(event) {
    this.address = event.target.value;
  }
}
