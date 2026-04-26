import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../share/profile-service';

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './electronics.html',
})
export class Electronics implements OnInit {

  products: any[] = [];

  constructor(private service: ProfileService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getUsers().subscribe((res: any) => {
      console.log(res); // 👈 debug

      // ✅ reliable filter using categoryId
      this.products = res.filter((p: any) => p.category?.id === 2);

      // ❗ fallback (if nothing found)
      if (this.products.length === 0) {
        this.products = res.slice(0, 6);
      }
    });
  }
}