import { Component, OnInit } from '@angular/core';
import { Comments } from '../models/comments.model';
import { ListPostesService } from '../service/list-postes.service';

@Component({
  selector: 'app-list-postes',
  templateUrl: './list-postes.component.html',
  styleUrls: ['./list-postes.component.scss']
})
export class ListPostesComponent implements OnInit {
  commenta: Comments[];
  constructor(private _listEmployees: ListPostesService) {
    // this._listEmployees.getComments().subscribe(result => {
    //   this.commenta = result
    // })
   }
  ngOnInit(): void {
    this.commenta = this._listEmployees.getEmployeee()
  }

}
