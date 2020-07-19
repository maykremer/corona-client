import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


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
  isColoneConfinement: boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public SuspectData: any) {}

  ngOnInit() {
    
  }

  ifSuspectWasInBaseDuringPas() {
    return this.suspectWasInBaseDuringPas ? 'כן' : 'לא';
  }

  ifSuspectWasSentToConfinement() {
    return this.suspectWasSentToConfinement ? 'כן' : 'לא';
  }

}