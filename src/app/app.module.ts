import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CompartidoModule } from './components/shared/compartido.module';
import { HomeComponent } from './components/home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { TechComponent } from './components/tech/tech.component';
import { CorreoComponent } from './components/correo/correo.component';
import { MeComponent } from './components/dialogos/me/me.component';
import { RecetaComponent } from './components/dialogos/receta/receta.component';
import { BuscadorComponent } from './components/dialogos/buscador/buscador.component';
import { NotaComponent } from './components/dialogos/nota/nota.component';
import { ParticlesModule } from 'angular-particle';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TechComponent,
    CorreoComponent,
    FooterComponent,
    MeComponent,
    RecetaComponent,
    BuscadorComponent,
    NotaComponent
  ],
  entryComponents: [
    TechComponent,
    MeComponent,
    CorreoComponent,
    RecetaComponent,
    BuscadorComponent,
    NotaComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    CompartidoModule, ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
