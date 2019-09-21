import { Component, OnInit, Input } from '@angular/core';

import { Person } from './user-list.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  constructor() { }

  @Input('') person: Person;

  ngOnInit() {
  }

}
