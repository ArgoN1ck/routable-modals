import { DialogRef } from '@angular/cdk/dialog';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about-dialog',
  templateUrl: './about-dialog.component.html',
  styleUrls: ['./about-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutDialogComponent {
  constructor(private dialogRef: DialogRef) {}

  close() {
    this.dialogRef.close();
  }
}
