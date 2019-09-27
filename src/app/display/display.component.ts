import { Component, OnInit, Query } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../user-list/user-list.interface';
import { DataService } from '../data.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public results$;
  public address: string = "";
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((query) => {
      this.address = query.search
      this.results$ = this.dataservice.findAddress(this.address);
    });    
  }
}
