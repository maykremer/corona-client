import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-suspects-list',
  templateUrl: './suspects-list.component.html',
  styleUrls: ['./suspects-list.component.css'],
})
export class SuspectsListComponent implements OnInit {
  suspects: Array<string> = ['1', '2', '3', '4'];

  constructor() {}

  ngOnInit(): void {}

  openDialog() {}
}
