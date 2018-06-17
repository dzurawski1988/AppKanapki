// app.component.ts
import { Component } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // Dostarcz mi UserService
  constructor(private userService: UserService) {}

  public ngOnInit(): void {
    // Skorzystaj z userService
    this.userService.getUsers().toPromise()
      .then((res) => console.log(res))
      .catch((err) => console.error('Oops...'));
  }
}
