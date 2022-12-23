import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Login } from './models/login-interface';
import { AuthService } from '../../core/services/auth.service';
import { tap } from 'rxjs';
import { Registration } from '../registration/models/registration-interface';
import { SharedModule } from '../../shared/shared.module';


@Component({
  standalone: true,
  imports: [ SharedModule ],
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AuthComponent {
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  public loginForm = this.fb.nonNullable.group<Login>({
    email: '',
    password: '',
  });

  public registrationForm = this.fb.nonNullable.group<Registration>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  public onSignIn (): void {
    this.authService.login(this.loginForm.value as Login).pipe(tap((res) => {
      console.log(res?.accessToken)
      if(res?.accessToken) this.authService.setAccessToken(res.accessToken);
    })).subscribe();
  }

}
