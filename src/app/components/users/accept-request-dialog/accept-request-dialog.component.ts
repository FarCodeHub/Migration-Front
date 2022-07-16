import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-accept-request-dialog',
  templateUrl: './accept-request-dialog.component.html',
  styleUrls: ['./accept-request-dialog.component.scss']
})
export class AcceptRequestDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AcceptRequestDialogComponent>
  ) {}

  ngOnInit(): void {
  }

onYesClick(){
  this.dialogRef.close(true);
}
  onNoClick(): void {
    this.dialogRef.close(false)
  }
}
