import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './pages/main/main.module';
import { FeatureModule } from './pages/feature/feature.module';
import { AboutModule } from './pages/about/about.module';
import { DialogModule } from '@angular/cdk/dialog';
import { ModalModule } from './modules/modal/modal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    DialogModule,

    ModalModule,
    MainModule,
    FeatureModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
