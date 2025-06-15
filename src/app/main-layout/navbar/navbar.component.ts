import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        routerLink: '/',
        styleClass: 'navbar-item'
      },
      {
        label: 'Balarila',
        routerLink: '/grammar-checker',
        styleClass: 'navbar-item'
      },
      {
        label: 'Corruption',
        routerLink: '/corruption',
        styleClass: 'navbar-item'
      },
    ]
  }
}
