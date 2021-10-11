import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  currency: any;
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    private currency_pipe_object: CurrencyPipe
  ) {
    this.currency = currency_pipe_object;
  }
}
