import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any[]> {
    return this.http.get<any>(`${environment.api}api/data`).pipe(
      map(response => response.objects)
    );
  }
}
