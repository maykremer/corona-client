import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  suspectWasInBaseDuringPas: boolean = true;
  suspectWasSentToConfinement: boolean = true; 
  isClinicConfinement: boolean= false; // מרפאה ממלאה
  wasExported: boolean;//
  workFinished: boolean;//
  clinicNotes: string=''; 
  hamalNotes: string;

  constructor() {}

  ngOnInit(): void {}

  ifSuspectWasInBaseDuringPas() {
    return this.suspectWasInBaseDuringPas ? 'כן' : 'לא';
  }

  ifSuspectWasSentToConfinement() {
    return this.suspectWasSentToConfinement ? 'כן' : 'לא';
  }

}