import { Component, OnInit } from '@angular/core';
import { Product,ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[]=[];
  currentPage = 1;
  pageSize = 10;
  totalProducts = 0;
  get totalPages(): number {
    return Math.ceil(this.totalProducts / this.pageSize);
  }
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(search = ''): void {
    this.productService.getProducts(search, this.currentPage, this.pageSize).subscribe((response) => {
        this.products = response;
    });
  }

  onSearch(event: Event): void {
    const searchValue = (event.target as HTMLInputElement).value;
    this.currentPage = 1; // Reset to the first page when searching.
    this.loadProducts(searchValue);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.loadProducts();
  }

  addToCart(product: Product): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  }
}
