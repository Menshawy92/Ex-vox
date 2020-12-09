import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comments } from '../models/comments.model';
import { ListPostesService } from '../service/list-postes.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    employee: Comments = {
    id: null,
    title: null,
    body: null,
  };


  constructor(private _ListPostesService : ListPostesService , private _router: Router) { }

  ngOnInit(): void {
  }

  saveComment(): void {
    this._ListPostesService.save(this.employee);
    console.log(this.employee)
    this._router.navigate(['/'])
  }

}
