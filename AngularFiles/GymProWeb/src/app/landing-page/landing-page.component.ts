import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  imgpro:any=[{url:'../assets/Images/gym-setup-tips-1.jpg'},{url:'../assets/Images/pexels-photo-1954524.jpeg'},{url:'../assets/Images/gina-lin-1167578-unsplash-800x510.jpg'}];
  constructor() { }

  ngOnInit() {
  }

}
