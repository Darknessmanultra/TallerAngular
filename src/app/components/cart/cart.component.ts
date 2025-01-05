import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any[] = [];

  ngOnInit(): void {
      this.loadCart();
  }

  loadCart(): void {
      this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  clearCart(): void {
      localStorage.removeItem('cart');
      this.cart = [];
  }
}
