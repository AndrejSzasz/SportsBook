import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
