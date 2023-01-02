import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  selectedId: number;

  constructor(private _router: Router) {

    this.selectedId = this._router.getCurrentNavigation().extras.state.selectedId;
   }

  ngOnInit(): void {


  }

}
