import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataService } from './../shared/data-service/data.service';

@Component({
  selector: 'app-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.css']
})
export class CVHeaderComponent implements OnInit {

  @Input() disabled: boolean;
  @Output() changeBoolean = new EventEmitter<any>();

  person = this.dataService.person;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  edit(ref: any): void {
    ref.disabled = !ref.disabled;

  }
  onChange(ref: any): void {
    if (ref.classList.contains('hidden')) {
      ref.classList.remove('hidden');
    }
  }

  deleteField(ref: any, btn: any): void {
    const question: boolean = confirm('Очистить текущее поле?');
    if (question) {
      ref.value = '';
      this.onChange(btn);
    }

  }

  saveChanges(ref: any, target?: any): void {
    const question: boolean = confirm('Сохранить изменения текущего поля?');
    if (question) {
      this.person[ref.name] = ref.value;
    } else {
      ref.value = this.person[ref.name];
    }
    ref.disabled = true;
    target.path[1].classList.add('hidden');
    this.changeBoolean.emit();
  }

}
