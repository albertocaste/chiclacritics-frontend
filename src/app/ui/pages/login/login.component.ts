import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserUseCase } from '../../../modules/user/application/user-use-case.service';
import { User } from '../../../modules/user/domain/user.model';
import { USER_API_PROVIDER } from '../../../modules/user/infrastructure/providers/api-user.provider';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  providers: [
    UserUseCase,
    USER_API_PROVIDER
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  private _userUseCase = inject(UserUseCase);

  urlIsLogin: boolean | undefined = undefined;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
      this.urlIsLogin = this.router.url == "/login" ? true : false;
      this.formInit();
      console.log(this.form);
  }

  public formInit() {
    if(!this.urlIsLogin) {
      let usernameControl = new FormControl('', [Validators.required]);
      this.form.addControl('username', usernameControl);
    }
  }

  public onSubmit(submitEvent: SubmitEvent) {
    console.log(submitEvent);
    console.log(this.form);
    this._userUseCase.save(new User(
      this.form.controls['email'].value,
      this.form.controls['username'].value,
      this.form.controls['password'].value
    ));
  }
}
