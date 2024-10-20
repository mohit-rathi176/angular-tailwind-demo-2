import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private cartClicked = new Subject<void>();

  addToCart(): void {
    this.cartClicked.next();
  }

  getCartSubject(): Subject<void> {
    return this.cartClicked;
  }

}
