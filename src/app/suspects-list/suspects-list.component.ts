import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainComponent } from '../main/main.component';
import { ApireqsService } from '../apireqs.service';
import { ExcelService } from '../excel.service';
import { clinicArray } from '../clinics.config';

export interface Irequest {}
@Component({
  selector: 'app-suspects-list',
  templateUrl: './suspects-list.component.html',
  styleUrls: ['./suspects-list.component.css'],
})
export class SuspectsListComponent implements OnInit {

  suspects: Array<{
    _id: string;
    suspectIdentityNumber: string;
    suspectFirstName: string;
    suspectLastName: string;
    suspectPhoneNumer: string;
    suspectTimeOfPositioning: Date;
    isColonelConfinment: boolean;
    isClinicConfinment: boolean;
    wasExported: boolean;
    clinicInCharge: number;
  }> = [];
  data: any = [];
  suspects1: any = [];
  ifHamal: boolean = false;
  HamalSuspects: any = [];
  clinicNum: string = "2";

  constructor(
    public dialog: MatDialog,
    public apiService: ApireqsService,
    private excelService: ExcelService) {}

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
    this.dialog.open(MainComponent, {
      width: '80%',
      data: { suspect: suspect },
    });
  }

  convertClinicNumberToClinicManagerName(number: number) {
    let clinicManagerName='';
    clinicArray.forEach((element) => {
      if (element.clinicNumber == number) 
      clinicManagerName= element.clinicManager;
      console.log('hello');
    });
    return clinicManagerName;
  }

  exportAsExcel(): void {
    this.suspects.forEach((element) => {
      if (element.wasExported === false) {
        this.data.push({
          'ת.ז': element.suspectIdentityNumber,
          'שם פרטי': element.suspectFirstName,
          'שם משפחה': element.suspectLastName,
          טלפון: element.suspectPhoneNumer,
          'מועד חשיפה': element.suspectTimeOfPositioning,
          'מפקדת מרפאת יחידה': this.convertClinicNumberToClinicManagerName(element.clinicInCharge),
          'האם חייל זקוק לבידוד לפי הסאל': element.isColonelConfinment,
          'האם החייל זקוק לבידוד לפי המרפאה': element.isClinicConfinment,
        });
        element.wasExported = true;
      }
    });
    this.excelService.exportAsExcelFile(this.data, 'suspect-list');
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
