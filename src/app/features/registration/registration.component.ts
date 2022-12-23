import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Registration } from './models/registration-interface';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  public registrationForm = this.fb.nonNullable.group<Registration>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  public onSignUp() {
    this.authService.register(this.registrationForm.value as Registration).subscribe(() => {
      this.router.navigate(['./auth']).then();
    });
  }
}


//
// email
//   :
//   "ss@gmail.com"
// firstName
//   :
//   "L"
// lastName
//   :
//   "B"
// password
//   :
//   "ss123"
