import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink,RouterLinkActive], 
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {}