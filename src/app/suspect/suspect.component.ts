import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.css']
})
export class SuspectComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
