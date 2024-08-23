import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskApiService {
  private apiUrl = 'http://127.0.0.1:5000/v1/tasks';

  constructor(private http: HttpClient) { }

  getTasksCreatedBy(token: string): Observable<any>{
    const headers = new HttpHeaders({
      'x-access-token': token
    });
    return this.http.get(`${this.apiUrl}/createdby`, { headers })
  }

  getTasksAssignedTo(token: string): Observable<any>{
    const headers = new HttpHeaders({
      'x-access-token': token
    });
    return this.http.get(`${this.apiUrl}/assignedto`, { headers })
  }

  updateTaskStatus(token: string, taskUid: string, done: boolean): Observable<any>{
    const headers = new HttpHeaders({
      'x-access-token': token
    });
    const body = {done};

    return this.http.patch(`${this.apiUrl}/${taskUid}`, body, { headers });
  }

  deleteTask(token: string, taskUid: string): Observable<any>{
    const headers = new HttpHeaders({
      'x-access-token': token
    });

    return this.http.delete(`${this.apiUrl}/${taskUid}`, { headers });
  }
  
}
