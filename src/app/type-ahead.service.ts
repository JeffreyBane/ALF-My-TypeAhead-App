import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeAheadService {

  getDropDownData(searchValue: string): Observable<any[]> {

    const mockJson = [

      { id: '1', value: 'The Visible Girl', disabled: false },
      { id: '2', value: 'Anxiety Man', disabled: false },
      { id: '3', value: 'Acne Boy', disabled: false },
      { id: '4', value: 'The Human Goiter', disabled: false },
      { id: '5', value: 'Vegan Zombie', disabled: false },
      { id: '6', value: 'Windows Update', disabled: false },
      { id: '7', value: 'JavaScript Diaper', disabled: false },
      { id: '8', value: 'The Incredible Middle Manager', disabled: false },
      { id: '9', value: 'Commander Reflux', disabled: false },
      { id: '10', value: 'Urinal Mint', disabled: false },
      { id: '11', value: 'Pause Squat', disabled: false },
      { id: '12', value: 'The Turd', disabled: false },
      { id: '13', value: 'Extended Warranty', disabled: false }


    ];

    return of(mockJson.filter(item =>
      item.value.toLowerCase().indexOf(searchValue.toLowerCase()) > -1));

  }

}
















