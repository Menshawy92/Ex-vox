import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Comments } from '../models/comments.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  // save(comment : Comments) : Observable<Comments>{
  //   if(comment.id === null){
  //    return  this.http.post<Comments>('https://jsonplaceholder.typicode.com/posts' , comment , {
  //       headers: new HttpHeaders({
  //         'Content-type' : 'application/json'
  //       })
  //     })
  //     .pipe(catchError(this.handleError));
  //   }
  // }

  save() {
    this.http.post('https://jsonplaceholder.typicode.com/posts'  , {
     }).toPromise().then((data:any)=>{
       console.log(data)
     })
 }

  getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/posts').pipe(catchError(this.handleError));
  }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  }

}
