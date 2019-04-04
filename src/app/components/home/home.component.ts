import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { TechComponent } from '../tech/tech.component';
import { MeComponent } from '../me/me.component';
import { CorreoComponent } from '../correo/correo.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public dlg: MatDialog, private snack: MatSnackBar) {}
  duracion = 10;
  openHerramientas() {
    this.dlg.open(TechComponent , {
      width: '50%',
      panelClass: 'custom-tools'
    });
  }
  openBiografia() {
    this.dlg.open(MeComponent , {
      width: '50%',
      panelClass: 'custom-me'
    });
  }
  openCorreo() {
    this.snack.openFromComponent(CorreoComponent, {
      duration: this.duracion * 1000,
    });
  }
}
