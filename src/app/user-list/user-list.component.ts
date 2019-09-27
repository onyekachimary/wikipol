import { Component, OnInit, Input } from '@angular/core';

import { Person } from './user-list.interface';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  public searchResults$;
  constructor(private dataservice:DataService, private router:ActivatedRoute) { 	
  }

  @Input() person


  ngOnInit() {
  	console.log(this.person)
  }

}
