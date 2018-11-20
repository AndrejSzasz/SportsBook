import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  compact: boolean;

  constructor() { }

  ngOnInit() {
    this.compact = true;
  }

  toggleCompact() {
    this.compact = !this.compact;
  }
}
