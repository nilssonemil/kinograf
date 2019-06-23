import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

// TODO: Replace with some more detailed information about what was wrong.
const REGISTRATION_FAILED_MESSAGE: string =
  "Could not register with that username and password."

  @Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private username = new FormControl()
  private password = new FormControl()

  private errorMessage: string = null

  constructor(
    private user: UserService,
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit() {}

  register() {
    this.user.register(this.username.value, this.password.value).subscribe(
      user => {
        this.errorMessage = null
        this.router.navigate(['/user', user.name])
      },
      error => {
        this.password.setValue("")
        this.errorMessage = REGISTRATION_FAILED_MESSAGE
      }
    )
  }

  cancel() {
    this.location.back()
  }

}
