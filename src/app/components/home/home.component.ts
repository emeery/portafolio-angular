import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit{
  myStyle: object = {};
  myParams: object = {};
  duracion = 5;
  constructor(
    public dlg: MatDialog,
    private snack: MatSnackBar
  ) {}
  ngOnInit() {
    this.myStyle = {
      'width': '100%',
      'height': '200%',
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };
    this.myParams = {
      particles: {
          number: {
              value: 200,
          },
          color: {
              value: '#ff0000'
          },
          shape: {
              type: 'polygon',
          },
      }
    };
  }
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
