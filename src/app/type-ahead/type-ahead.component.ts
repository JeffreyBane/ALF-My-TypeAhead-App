import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { TypeAheadService } from '../type-ahead.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss']
})
export class TypeAheadComponent implements OnInit {

  public searchBox = new FormControl();
  public clearedBox = true;
  public searchTerm = '';

  // Object bound to autocomplete
  public searchResults: any[] = [];

  // Empty default object for when the search box doesn't have anything in it
  public defaultResults: any[] = [];


  // JSON to display when no items are returned from the service
  public noResult: any = {
    id: 0,
    value: 'No names match criteria',
    disabled: true

  };
  public noResults: any[] = [];



  constructor(
    private _TypeAheadService: TypeAheadService,
    private _router: Router
  ) { }



  ngOnInit(): void {

    // Add our not found item to the noResults array
    this.noResults[0] = this.noResult;
    // set the inital value of searchResults to our empty array
    this.searchResults = this.defaultResults;
    // Setup a debounce time constant of 1/2 a second.
    const DEBOUNCE_TIME = 500;


    // get values from the service
    this.searchBox.valueChanges.pipe(
      debounceTime(DEBOUNCE_TIME),
      switchMap(changedValue => {
      // Close Loading Panel
        if (changedValue.trim() !== '') {
          this.searchTerm = changedValue.trim();
          // Open Loading Panel
          this.clearedBox = false;
          return this._TypeAheadService.getDropDownData(this.searchTerm);
        } else {
          this.searchTerm = '';
          // Open Loading Panel
          this.clearedBox = true;
          return of(this.defaultResults);
        }
      }
      )
    ).subscribe(data => {
      if (data.length === 0) {
        if (this.clearedBox) {
          this.searchResults = data;
        } else {
          this.searchResults = this.noResults;
        }
      } else {
        this.searchResults = data;
      }
      // Close Loading Panel
    }
    );
  }


  itemSelected(event): void {
    this._router.navigate(['/DetailPage'], { state: { selectedId: event.option.value } });
  }


}
