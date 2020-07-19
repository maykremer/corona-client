import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporter',
  templateUrl: './reporter.component.html',
  styleUrls: ['./reporter.component.css']
})
export class ReporterComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
