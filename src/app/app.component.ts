import { Component } from '@angular/core';

import { DataService } from './shared/data-service/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  disabled = this.dataService.disabled;

  constructor(private dataService: DataService) { }

  changeBoolean(): void {
    this.dataService.changeDisable();
    this.disabled = this.dataService.disabled;

    const inputs = document.querySelectorAll('.soft-hard input');
    const iterator = inputs[Symbol.iterator]();

    while (true) {
      const res = iterator.next();
      const value = res.value;
      if (res.done) {
        break;
      }
      value.disabled = true;
    }
  }
}
