import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './components/feature/feature.component';
import { RouterModule } from '@angular/router';
import { FeatureDialogComponent } from './components/feature-dialog/feature-dialog.component';
@NgModule({
  declarations: [FeatureComponent, FeatureDialogComponent],
  imports: [CommonModule, RouterModule],
})
export class FeatureModule {}
