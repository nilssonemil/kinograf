import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor(private userService: UserService) { }

  private isLoggedIn: boolean = false

  ngOnInit() {
    // TODO: Find out a way to get this to update when user's state is updated
    this.isLoggedIn = this.userService.getUser() != null
  }

}
