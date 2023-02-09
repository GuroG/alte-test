import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Login } from './models/login-interface';
import { AuthService } from '../../core/services/auth.service';
import { tap } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';


@Component({
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent {
  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  public loginForm = this.fb.nonNullable.group<Login>({
    userName: '',
    password: '',
  });

  public onSignIn(): void {
    this.authService.login(this.loginForm.value as Login).pipe(tap((res) => {
      if (res?.accessToken) this.authService.setAccessToken(res.accessToken);
    })).subscribe();
  }

}
