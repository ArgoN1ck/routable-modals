import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/components/main/main.component';
import { ModalComponent } from './modules/modal/components/modal.component';
import { FeatureComponent } from './pages/feature/components/feature/feature.component';
import { AboutComponent } from './pages/about/components/about/about.component';
import { AboutDialogComponent } from './pages/about/components/about-dialog/about-dialog.component';
import { FeatureDialogComponent } from './pages/feature/components/feature-dialog/feature-dialog.component';

export const routes: Route[] = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'feature',
    component: FeatureComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'feature/dialog',
    component: ModalComponent,
    data: {
      dialog: FeatureDialogComponent,
    },
  },
  {
    path: 'about/dialog',
    component: ModalComponent,
    data: {
      dialog: AboutDialogComponent,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
