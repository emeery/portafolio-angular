import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TechComponent } from '../dialogo/dialogo.component';
import { MeComponent } from '../me/me.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public dlg: MatDialog) {}
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
}
