import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Registration } from './models/registration-interface';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IntlModule } from '@progress/kendo-angular-intl';

@Component({
  standalone: true,
  imports: [SharedModule, DateInputsModule, LabelModule, ButtonsModule, IntlModule ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  public registrationForm = this.fb.nonNullable.group<Registration>({
    userName: '',
    email: '',
    password: '',
  });

  public onSignUp() {
    this.authService.register(this.registrationForm.value as Registration).subscribe(() => {
      this.router.navigate(['./auth']).then();
    });
  }

  public value: any = new Date(2000, 2, 10);
}
