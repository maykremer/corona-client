import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApireqsService } from '../apireqs.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  suspectWasInBaseDuringPas: boolean = true;
  suspectWasSentToConfinement: boolean = true; 
  isClinicConfinement: boolean = false; 
  wasExported: boolean;
  workFinished: boolean;
  clinicNotes: string = ''; 
  hamalNotes: string;
  isColoneConfinement: boolean = false;
  PutBody: any;

  constructor(@Inject(MAT_DIALOG_DATA) public SuspectData: any, public apiService: ApireqsService) {}

  ngOnInit() {
    this.PutBody = this.SuspectData.suspect;
    this.updateData();
  }

  updateData(){
    this.suspectWasInBaseDuringPas = this.SuspectData.suspect.suspectWasInBaseDuringPas;
    this.suspectWasSentToConfinement = this.SuspectData.suspect.suspectWasSentToConfinement; 
  }

  toggle(event){
    this.PutBody["isColoneConfinement"] = event.checked;
  }

  UpdateSuspect(){
    this.PutBody["clinicNotes"] = this.clinicNotes;
    console.log(this.PutBody);
    this.apiService.updateClinicSuspect(this.SuspectData.suspect._id, this.PutBody).subscribe((res: any) => {
      console.log(res);
    });
  }

  ifSuspectWasInBaseDuringPas() {
    return this.suspectWasInBaseDuringPas ? 'כן' : 'לא';
  }

  ifSuspectWasSentToConfinement() {
    return this.suspectWasSentToConfinement ? 'כן' : 'לא';
  }

}