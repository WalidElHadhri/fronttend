import { Component, OnInit } from '@angular/core';
import { ISignupRequest, SignupRequest } from 'src/app/model/signuprequest.model';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

signupRequest : ISignupRequest = new SignupRequest();
loading =false

  constructor(private accountService: AccountService) {

   }

  ngOnInit(): void {
  }

  signup(){
    console.log(this.signupRequest);
    this.loading = true;
    this.accountService.signup(this.signupRequest).subscribe(res => {
      this.loading = false
    }, error => {
      this.loading=false;
    }, () => {
      this.loading=false;
    });
  }

}
