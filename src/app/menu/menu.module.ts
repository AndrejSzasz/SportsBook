import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuLayoutComponent } from './menu-layout/menu-layout.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [
    SideMenuComponent,
    MenuLayoutComponent,
    MenuItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MenuLayoutComponent,
  ]
})
export class MenuModule { }