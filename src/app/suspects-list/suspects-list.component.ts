import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainComponent } from '../main/main.component';
import { SuspectComponent } from '../suspect/suspect.component';

@Component({
  selector: 'app-suspects-list',
  templateUrl: './suspects-list.component.html',
  styleUrls: ['./suspects-list.component.css'],
})
export class SuspectsListComponent implements OnInit {
  suspects: Array<string> = ['1', '2', '3', '4'];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(suspect) {
    console.log(suspect);
    this.dialog.open(MainComponent, {
      width: '80%',
    });
  }
}
