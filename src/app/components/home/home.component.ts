import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MeComponent } from '../dialogos/me/me.component';
import { RecetaComponent } from '../dialogos/receta/receta.component';
import { BuscadorComponent } from '../dialogos/buscador/buscador.component';
import { NotaComponent } from '../dialogos/nota/nota.component';
import {CorreoComponent} from '../correo/correo.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    public dlg: MatDialog,
    private snack: MatSnackBar
  ) {}
  duracion = 5;
  scrollHacia(ele): void {
    ele.scrollIntoView({
      behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
  openBiografia() {
    this.dlg.open(MeComponent, {
      panelClass: 'custom-me'
    });
  }
  openRecetas() {
    this.dlg.open(RecetaComponent , {
      panelClass: 'custom-recetas'
    });
  }
  openBuscador() {
    this.dlg.open(BuscadorComponent , {
      panelClass: 'custom-search'
    });
  }
  openNotas() {
    this.dlg.open(NotaComponent, {
      panelClass: 'custom-note'
    });
  }
  openCorreo() {
    this.snack.openFromComponent(CorreoComponent, {
      duration: this.duracion * 1000,
    });
  }
}
