import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CompartidoModule } from './components/shared/compartido.module';
import { HomeComponent } from './components/home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { DialogoComponent } from './components/dialogo/dialogo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DialogoComponent
  ],
  entryComponents: [ DialogoComponent ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    CompartidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
