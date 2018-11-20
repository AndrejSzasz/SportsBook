import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sb-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuToggleComponent implements OnInit {

  @Input() icon: string;
  @Output() click: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.click.emit();
  }

}
