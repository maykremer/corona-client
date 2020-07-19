import { Component } from '@angular/core';
import { UserService } from './userService/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clinic Client';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.login();
  }
}
