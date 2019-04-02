import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogoComponent } from '../dialogo/dialogo.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public dlg: MatDialog) {}
  openDialogo() {

    this.dlg.open(DialogoComponent , {
      width: '50%',
      panelClass: 'custom-modalbox'
    });
  }
}
