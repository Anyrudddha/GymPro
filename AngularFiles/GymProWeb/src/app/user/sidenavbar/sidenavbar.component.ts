import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from '@angular/material';

@Component({
  selector: "app-sidenavbar",
  templateUrl: "./sidenavbar.component.html",
  styleUrls: ["./sidenavbar.component.scss"]
})

export class SidenavbarComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  reason = '';
  ngOnInit() {

  }
  

  constructor() {

  }
  // tslint:disable-next-line: member-ordering
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
