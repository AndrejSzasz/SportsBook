import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'sb-menu-layout',
  templateUrl: './menu-layout.component.html',
  styleUrls: ['./menu-layout.component.scss']
})
export class MenuLayoutComponent implements OnInit {

  constructor (public authService: AuthService) { }

  ngOnInit() {
  }

}
