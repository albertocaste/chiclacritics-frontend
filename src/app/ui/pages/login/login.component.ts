import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  urlIsLogin: boolean | undefined = undefined;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private router: Router) {
  }

  ngOnInit(): void {
      this.urlIsLogin = this.router.url == "/login" ? true : false;
      if(!this.urlIsLogin) {
        let usernameControl = new FormControl('', [Validators.required]);
        this.form.addControl('username', usernameControl);
      }
  }
}
