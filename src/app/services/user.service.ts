import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://127.0.0.1:5000/v1/users';

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, {email, password});
  }

}
