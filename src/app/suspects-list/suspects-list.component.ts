import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainComponent } from '../main/main.component';
import { SuspectComponent } from '../suspect/suspect.component';

import { ApireqsService } from '../apireqs.service';

@Component({
  selector: 'app-suspects-list',
  templateUrl: './suspects-list.component.html',
  styleUrls: ['./suspects-list.component.css'],
})
export class SuspectsListComponent implements OnInit {
  suspects: Array<string> = [];


  constructor(public dialog: MatDialog, public apiService: ApireqsService) {}

  ngOnInit(): void {
    this.apiService.getSuspectsByClinicId("3").subscribe((res: any) => {
      console.log(res); 
      res.forEach((element: any) => {
        this.suspects.push(element);
      })
    })
  }

  openDialog(suspect) {
    console.log(suspect);
    this.dialog.open(MainComponent, {
      width: '80%',
    });
  }
}
