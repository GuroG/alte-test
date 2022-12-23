import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'ecm-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {

  public loggedIn = false;

  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    this.authService.$isLoggedIn.subscribe((loggedInStatus) => {
      this.loggedIn = loggedInStatus;
      this.cdr.detectChanges();
    });
  }

  public signOut(): void {
    this.authService.signOut();
  }


}
