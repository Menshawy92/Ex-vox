import { Component, OnInit, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Department } from '../models/department.model';
import { CommentsService } from '../service/comments.service'
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Comments } from '../models/comments.model'
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  // employee: Employee = {
  //   id: null,
  //   name: null,
  //   gender: null,
  //   email: null,
  //   phoneNumber: null,
  //   contactPreference: null,
  //   dateOfBirth: null,
  //   department: '-1',
  //   isActive: null,
  //   photoPath: null,
  // };

  // departments: Department[] = [
  //   { id: 1, name: 'mohamed' },
  //   { id: 2, name: 'adel' },
  //   { id: 3, name: 'menshawy' },
  // ];

  commenta: Comments[];


  constructor(private comment: CommentsService, rout: ActivatedRoute, private http: HttpClient) {
    // this.comment.getComments().subscribe(result => {
    //   this.commenta = result
    // })
  }

  ngOnInit(): void {
  }
  title: string;


  // saveComment(form : NgForm): void {
  //   this.comment.save(this.commenta).subscribe(data =>{
  //     console.log(data)
  //   }
  
  //   )
  // }


  saveComment() {
     this.http.post('https://jsonplaceholder.typicode.com/posts'  , {
      title : this.title
      }).toPromise().then((data:any)=>{
        console.log(data)
      })
  }

  // saveComment(empForm: NgForm): void {
  //   this.comment.save(this.commenta).map(
  //     (data: CommentsService) => {
  //       // log the employee object after the post is completed
  //       console.log(data);
  //       empForm.reset();
  //       // this._router.navigate(['list']);
  //     },
  //     // (error: any) => { console.log(error); }
  //   );
  // }
}
