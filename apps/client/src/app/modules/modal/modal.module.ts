import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, RouterModule],
})
export class ModalModule {}
