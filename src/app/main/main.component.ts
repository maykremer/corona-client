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
  clinicNotes: string=''; 
  hamalNotes: string;
  reporterDetails: {
    reporterIdentityNumber: string;
    reporterFirstName: string;
    reporterLastName: string;
    reporterMail: string;
    reporterPhoneNumber: string;
    reporterNotes: string;
    isColoneConfinement: boolean

  }={
    reporterIdentityNumber: '111111111',
    reporterFirstName: 'firstName',
    reporterLastName: 'lastName',
    reporterMail: 'name@gmail.com',
    reporterPhoneNumber: '050-0000000',
    reporterNotes: 'reporter notes',
    isColoneConfinement: false
  };
  suspectDetails: {
    suspectIdentityNumber: string;
    suspectFirstName: string;
    suspectLastName: string;
    suspectPhoneNumber: string;
    suspectTimeOfPositioning: Date;
    suspectPlaceOfPositioning: string;
  suspectHasDeclaredInocense: boolean; 
  } = {
    suspectIdentityNumber: '123456789',
    suspectFirstName: 'niv',
    suspectLastName: 'konforty',
    suspectPhoneNumber: '052-454442',
    suspectTimeOfPositioning: new Date(),
    suspectPlaceOfPositioning: 'tel aviv',
    suspectHasDeclaredInocense: true
  };

  constructor(@Inject(MAT_DIALOG_DATA) public SuspectData: any) {}

  ngOnInit() {
    console.log(this.SuspectData);
  }

  ifSuspectWasInBaseDuringPas() {
    return this.suspectWasInBaseDuringPas ? 'כן' : 'לא';
  }

  ifSuspectWasSentToConfinement() {
    return this.suspectWasSentToConfinement ? 'כן' : 'לא';
  }

}