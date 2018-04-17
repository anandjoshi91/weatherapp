import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlertsComponent } from './alerts/alerts.component';
import { TipsComponent } from './tips/tips.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';



const appRoutes: Routes = [
  { path: 'tips', component: TipsComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    TipsComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
