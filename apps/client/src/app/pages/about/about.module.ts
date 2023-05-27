import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { AboutDialogComponent } from './components/about-dialog/about-dialog.component';
@NgModule({
  declarations: [AboutComponent, AboutDialogComponent],
  imports: [CommonModule, RouterModule],
  exports: [AboutComponent],
})
export class AboutModule {}
