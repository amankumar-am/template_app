import { Component, OnInit } from '@angular/core';
import { MenuItemType, MenuService } from '../../services/menuService/menu.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  constructor(private menuService: MenuService) { }


  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe({
      next: (items: any) => {
        this.menuItems = items;
      },
      error: (err) => {
        console.error('Error fetching menu items:', err);
      },
      complete: () => {
        console.log('Menu items fetch completed');
      }
    });
  }
}