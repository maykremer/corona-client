import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainComponent } from '../main/main.component';
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
    this.apiService.getSuspectsByClinicId("1").subscribe((res: any) => {
      res.forEach((element: any) => {
        if(element["isColonelConfinment"] == true){
          this.suspects.push(element);
        }
      });
    })
  }

  

  openDialog(suspect) {
    this.dialog.open(MainComponent, { width: '80%' , data: { suspect: suspect }});
  }
}
