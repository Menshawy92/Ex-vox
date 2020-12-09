import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class ListPostesService {
  private listEmployees: Comments[] = [
    {
      id: 1,
      title: 'Mark',
      body: 'Male',
    },
    {
      id: 2,
      title: 'Mark',
      body: 'Male',
    },
    {
      id: 3,
      title: 'Mark',
      body: 'Male',
    },
  ];
  constructor(private http: HttpClient) { }
// commnts : Comments[]
  getEmployeee(): Comments[] {
    return this.listEmployees
  }

  // getComments(): Observable<Comments[]> {
  //   return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/posts');
  // }



  save(commnt : Comments){
    this.listEmployees.push(commnt)
  }
}
