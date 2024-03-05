import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './modules/layout/navbar/navbar.component';
import { FooterComponent } from './modules/layout/footer/footer.component';  
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
