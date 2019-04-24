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
    this.dlg.open(MeComponent , {
      panelClass: 'custom-me'
    });
  }
  openRecetas() {
    this.dlg.open(MeComponent , {
      panelClass: 'custom-recetas'
    });
  }
  // openHerramientas() {
  //   this.dlg.open(TechComponent , {
  //     panelClass: 'custom-tools'
  //   });
  // }
  // openCorreo() {
  //   this.snack.openFromComponent(CorreoComponent, {
  //     duration: this.duracion * 1000,
  //   });
  // }
}
