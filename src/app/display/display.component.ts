import { Component, OnInit, Query } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Person } from '../user-list/user-list.interface';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  private results: Person[];
  private address: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const { address } = this.route.queryParams.value;
    this.address = address;

    this.results = [
      {name: 'John Walker', id: 30, description: 'The walkers of the night.', position: 'Senator'},
      {name: 'St. Morgan', id: 24, description: 'Ryo of Venice.', position: 'Senator'},
      {name: 'Frank Moore', id: 13, description: 'The king of the fleet.', position: 'Senator'}
    ];
  }
}
