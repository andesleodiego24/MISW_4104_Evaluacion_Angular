import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cafe } from '../models/cafe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CafeService {
  private apiUrl: string = environment.CafeBaseUrl;

  constructor(private http: HttpClient) {}

  obtenerCafe(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl);
  }
}
