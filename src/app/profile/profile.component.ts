import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	text = `Femi Gbajabiamila (born June 25, 1962, surname also spelled Gbaja-Biamila and Gbajabiamila) is a Nigerian lawyer,All Progressives Congress Leader, and House Leader of Nigeria's 8th House of Representatives. Gbaja Biamila attended Igbobi College in Yaba, Lagos, King William's College on the Isle of Man, United Kingdom, Atlanta's John Marshall Law School, United States, and the University of Lagos in Lagos. Gbaja Biamila was elected to the House in 2003, and  re-elected in 2007.
		He represents the Surulere I constituency of Lagos State in the House of Representatives. He is the House's Majority Leader.Gbaja Biamila has criticized members of Congress for switching parties. He suggested that many voters don't have access to the information to make choices based on every individual stance, and therefore are sometimes only voting for candidates based on their party alignment. He criticized floppers with this in mind, saying the effect "cannot be anything but negative.`;

  constructor() { }

  ngOnInit() {}
}
