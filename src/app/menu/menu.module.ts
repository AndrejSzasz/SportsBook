import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuLayoutComponent } from './menu-layout/menu-layout.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SbPersistentStorageService } from '../services/sb-persistent-storage.service';

@NgModule({
  declarations: [
    SideMenuComponent,
    MenuLayoutComponent,
    MenuItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    MenuLayoutComponent,
  ],
  providers: [
    SbPersistentStorageService,
  ]
})
export class MenuModule { }
