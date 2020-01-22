import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material';
import { DialogOverviewExampleDialogComponent } from './DialogOverviewExampleDialog/DialogOverviewExampleDialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})



export class UserComponent implements OnInit {
    animal: string;
    name: string;

  constructor(public dialog: MatDialog,) {}
    ngOnInit() {

    }

    openDialog(): void {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
        width: '250px',
        data: {name: this.name, animal: this.animal}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }
  }
