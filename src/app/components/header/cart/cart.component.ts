import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  animate = false;
  itemCount = 0;

  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
    this._sharedService.getCartSubject().subscribe({
      next: () => {
        this.triggerAnimation();
      }
    });
  }

  triggerAnimation(): void {
    this.animate = true;
    this.itemCount += 1;
  }

  resetAnimation(): void {
    this.animate = false;
  }

}
