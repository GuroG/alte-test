import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Login } from '../../features/auth/models/login-interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registration } from '../../features/registration/models/registration-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public $isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.$isLoggedIn.next(!!localStorage.getItem('accessToken'));
  }

  public login(payload: Login): Observable<any> {
    return this.http.post<any>(`${environment.ecommerceAPI}/auth/login`, payload);
  }

  public register(payload: Registration): Observable<any> {
    return this.http.post<any>(`${environment.ecommerceAPI}/auth/signup`, payload);
  }

  public signOut(): void {
    localStorage.removeItem('accessToken');
    this.$isLoggedIn.next(false);
  }

  public setAccessToken (token: string): void {
    localStorage.setItem('accessToken', token);
    this.$isLoggedIn.next(true);
  }
}
