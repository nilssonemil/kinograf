import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  private searchInput = new FormControl()

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  private isLoggedIn: boolean = false

  ngOnInit() {
    // TODO: Find out a way to get this to update when user's state is updated
    this.isLoggedIn = this.userService.getUser() != null
  }

  search() {
    this.router.navigate(['/search', this.searchInput.value])
    this.searchInput.setValue("")
  }

}
