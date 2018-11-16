import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  private returnUrl: string;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.redirectOnSuccess();
      },
      (error) => {
        if (typeof error.error === 'string') {
          window.alert(error.error);
        } else {
          console.log(error.error);
        }
      });
  }

  private redirectOnSuccess() {
    this.router.navigateByUrl(this.returnUrl);
  }

}
