import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../user.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-DialogOverviewExampleDialog',
  templateUrl: './DialogOverviewExampleDialog.component.html',
  styleUrls: ['./DialogOverviewExampleDialog.component.scss']
})

export class DialogOverviewExampleDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  ngOnInit() {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}



