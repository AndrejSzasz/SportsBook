import { Component, OnInit } from '@angular/core';

import { SbPersistentStorageService } from 'src/app/services/sb-persistent-storage.service';

@Component({
  selector: 'sb-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  compact: boolean;
  STORAGE_KEY = 'compact';

  constructor(private sbPersistentStorageService: SbPersistentStorageService) { }

  ngOnInit() {
    this.compact = this.sbPersistentStorageService.retrieve(this.STORAGE_KEY);
  }

  toggleCompact() {
    this.compact = !this.compact;
    this.sbPersistentStorageService.save('compact', this.compact);
  }
}
