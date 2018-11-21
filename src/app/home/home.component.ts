import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'sb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() title: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
