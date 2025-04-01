import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

export interface MenuItemType {
  id: string;
  name: string;
  endpoint: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = `${environment.menuAPIHost}/menu`;
  constructor(private http: HttpClient) { console.log(this.apiUrl); }

  getMenuItems(): Observable<MenuItemType[]> {


    return this.http.get<MenuItemType[]>(this.apiUrl);
  }

  getMenuItem(id: string): Observable<MenuItemType> {
    return this.http.get<MenuItemType>(`${this.apiUrl}/${id}`);
  }
}
