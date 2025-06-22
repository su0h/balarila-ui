import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-homepage',
  imports: [ButtonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  
  constructor(private router: Router) {}

  tryButtonClickHandler() {
    this.router.navigateByUrl('/grammar-checker');
  }
}
