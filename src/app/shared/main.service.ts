import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private items: number = 1;
  private itemsSubject = new BehaviorSubject<number>(this.items);

  constructor() { }

  addItem(): void {
    if (this.items >= 0 && this.items < 50) {
      this.items++;
      this.itemsSubject.next(this.items);
    }

  }

  removeItem(): void {
    if (this.items > 0) {
      this.items--;
      this.itemsSubject.next(this.items);
      console.log(this.items)
    }
  }

  getItemsCountObservable(): Observable<number> {
    if (this.items > 50) {
      return throwError("Fehler: Der Wert ist größer als 50.");
    } else {
      return this.itemsSubject.asObservable();
    }
  }
}
