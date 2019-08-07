import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { GellaryComponent } from './gellary/gellary.component';
// import { NavbarComponent } from './navbar/navbar.component';


import { RouterModule, Routes } from '@angular/router';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ImageViewerComponent
    // GellaryComponent,
    // NavbarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
