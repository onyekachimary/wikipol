import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private address: string;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  NavigationExtras

  findAddress(event) {
    event.preventDefault();
    const queryParams = { address: this.address };

    this.router.navigate(['display'], { queryParams });
  }

  updateAddress(event) {
    this.address = event.target.value;
  }
}
