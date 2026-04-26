import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../share/profile-service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
})
export class About implements OnInit {

  route = inject(ActivatedRoute);
  service = inject(ProfileService);

  feedbackdata: string = '';
  products: any[] = [];

  ngOnInit() {

   
    this.route.queryParams.subscribe(params => {
      this.feedbackdata = params['msg'] || 'No feedback';
    });

    
    this.service.getUsers().subscribe((res: any) => {
      this.products = res.slice(0, 3);
    });
  }
}