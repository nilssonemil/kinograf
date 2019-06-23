import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserService } from '../user/user.service';
import { FormControl } from '@angular/forms';

const LOGIN_FAILED_MESSAGE: string = "Username or password does no match."
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild("username", {static: false})
  private usernameRef: ElementRef
  private password = new FormControl('')

  private errorMessage: string = null

  constructor(private user: UserService) { }

  ngOnInit() {}

  login() {
    this.user.login(this.usernameRef.nativeElement.value,
                    this.password.value).then(
      success => {
        console.debug(success? "Login was successful!" :
                               "Login was NOT successful!")
        if (success) {
          this.errorMessage = null
          // TODO: Redirect
        } else {
          this.usernameRef.nativeElement.value = ""
          this.usernameRef.nativeElement.focus()
          this.password.setValue("")
          this.errorMessage = LOGIN_FAILED_MESSAGE
        }
      }
    )
  }
}
