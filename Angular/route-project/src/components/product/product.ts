import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../share/profile-service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
})
export class Product implements OnInit {

  products: any[] = [];

  constructor(private service: ProfileService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getUsers().subscribe((res: any) => {
      this.products = res.slice(0, 6);
    });
  }

  // ✅ ADD (needs required fields)
  add() {
    const newProduct = {
      title: 'New Product',
      price: 100,
      description: 'Demo product',
      categoryId: 1,
      images: ['https://placeimg.com/640/480/any']
    };

    this.service.addUser(newProduct).subscribe((res: any) => {
      this.products.unshift(res); // real API returns created object
    });
  }

  update(id: number) {
    this.service.updateUser(id, {
      title: 'Updated Product'
    }).subscribe(() => {
      this.products = this.products.map(p =>
        p.id === id ? { ...p, title: 'Updated Product' } : p
      );
    });
  }

  delete(id: number) {
    this.service.deleteUser(id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== id);
    });
  }
}