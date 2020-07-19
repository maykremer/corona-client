import { Component, OnInit } from '@angular/core';
import { ApireqsService } from '../apireqs.service';


@Component({
  selector: 'app-suspects-list',
  templateUrl: './suspects-list.component.html',
  styleUrls: ['./suspects-list.component.css'],
})
export class SuspectsListComponent implements OnInit {
  suspects: Array<string> = [];

  constructor(public apiService: ApireqsService) {}

  ngOnInit(): void {
    this.apiService.getSuspectsByClinicId("3").subscribe((res: any) => {
      console.log(res); 
      res.forEach((element: any) => {
        this.suspects.push(element);
      })
    })
  }

  openDialog() {}
}
