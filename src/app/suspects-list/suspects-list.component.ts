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
  suspects: any = [];
  ifHamal: boolean = false;
  HamalSuspects: any = [];
  clinicNum: string = "2";

  constructor(public dialog: MatDialog, public apiService: ApireqsService) {}

  ngOnInit(): void { 
    if(this.clinicNum == "14"){
      this.ifHamal = true;
      this.GetAllSupHamal();
    }
    else{
      this.GetSupByClinic();
    } 
  }

  openDialog(suspect) {
    this.dialog.open(MainComponent, { width: '80%' , data: { suspect: suspect }});
  }

  GetAllSupHamal(){
    this.apiService.getAllSuspects().subscribe((res: any) => {
      console.log(res);
      res.forEach(element => {
        this.suspects.push(element);
      });
    })
  }

  GetSupByClinic(){
    this.apiService.getSuspectsByClinicId("3").subscribe((res: any) => {
      res.forEach((element: any) => {
        if(element["isColonelConfinment"] == true){
          this.suspects.push(element);
        }
      });
    });
  }
}
