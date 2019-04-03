import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class TechComponent implements OnInit {

  constructor(public dialogo: MatDialog) { }

  ngOnInit() {
  }

}
