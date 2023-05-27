import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, Optional, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-feature-dialog',
  templateUrl: './feature-dialog.component.html',
  styleUrls: ['./feature-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeatureDialogComponent {
  constructor(@Optional() private dialogRef: DialogRef) {}

  close() {
    this.dialogRef.close();
  }
}
