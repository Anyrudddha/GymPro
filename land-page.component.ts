import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {

  constructor() { }
  imgpro:any=[{url:'../assets/Images/gym-setup-tips-1.jpg'},{url:'../assets/Images/pexels-photo-1954524.jpeg'},{url:'../assets/Images/gina-lin-1167578-unsplash-800x510.jpg'}];






  ngOnInit() {
  }

}
