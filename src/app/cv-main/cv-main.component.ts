import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService } from './../shared/data-service/data.service';

@Component({
  selector: 'app-cv-main',
  templateUrl: './cv-main.component.html',
  styleUrls: ['./cv-main.component.css']
})
export class CvMainComponent implements AfterViewInit {

  @Input() disabled: boolean;
  @Output() changeBoolean = new EventEmitter<any>();

  logoUrlTitle = 'Put a new URL for this logo';
  person = this.dataService.person;
  form: FormGroup = new FormGroup({
    companyName: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    logoUrl: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor(private dataService: DataService) { }

  ngAfterViewInit(): void {
    const activeItem = document.querySelector('.skill-list-item-body');
    activeItem.classList.remove('hidden');

  }

  edit(ref: any): void {
    const textArea = ref.path[3].lastChild.firstChild;
    const input = ref.path[2].children[0].firstChild;
    input.disabled = !input.disabled;
    if (textArea) {
      textArea.disabled = !textArea.disabled;
    }
    if (!input.disabled) {
      input.focus();
    }
  }

  showItemBody(target: any): void {
    const body = target.path[3].children[1];
    body.classList.toggle('hidden');
  }

  deleteField(index: number): void {
    const question = confirm('Очистить текущее поле?');
    if (question) {
      this.person.softTechnicalSkills[index][0] = '';
      this.person.softTechnicalSkills[index][1] = '';
    }
  }

  onChange(ref: any): void {
    if (ref.classList.contains('hidden')) {
      ref.classList.remove('hidden');
    }
  }

  saveChanges(input: any, textArea: any, index: number, ref: any): void {
    const question = confirm('Сохранить изменения текущего поля?');
    if (question) {
      this.person.softTechnicalSkills[index][0] = input.value;
      this.person.softTechnicalSkills[index][1] = textArea.value;
    } else {
      input.value = this.person.softTechnicalSkills[index][0];
      textArea.value = this.person.softTechnicalSkills[index][1];
    }
    input.disabled = true;
    ref.classList.add('hidden');
    this.changeBoolean.emit();
  }

  showCreateBlock(ref: any): void {
    ref.classList.toggle('hidden');
  }

  createExpItem(): void {
    this.person.experience.push(this.form.value);
    this.form.setValue({ companyName: '', location: '', description: '', logoUrl: '' });
    const block = document.querySelector('.experience-create');
    block.classList.add('hidden');
  }

  editExpBlock(companyName: any, location: any, description: any): void {
    companyName.disabled = !companyName.disabled;
    location.disabled = !location.disabled;
    description.disabled = !description.disabled;
  }

  clearThisField(ref: any): void {
    ref.value = '';
  }

  deleteExpBlock(index: number): void {
    const question = confirm('Удалить текущий элемент?');
    if (question) {
      this.person.experience.splice(index, 1);
      this.changeBoolean.emit();
    }
  }

  saveExpBlockChanges(companyName: any, location: any, description: any, logoUrl: any, save: any, index: number): void {
    const question = confirm('Сохранить изменения текущего блока?');
    if (question) {
      this.person.experience[index].companyName = companyName.value;
      this.person.experience[index].location = location.value;
      this.person.experience[index].description = description.value;

      if (logoUrl.value !== this.logoUrlTitle && logoUrl.value !== '') {
        this.person.experience[index].logoUrl = logoUrl.value;
        logoUrl.value = this.logoUrlTitle;
      }
    } else {
      companyName.value = this.person.experience[index].companyName;
      location.value = this.person.experience[index].location;
      description.value = this.person.experience[index].description;
      logoUrl.value = this.logoUrlTitle;
    }

    companyName.disabled = !companyName.disabled;
    location.disabled = !location.disabled;
    description.disabled = !description.disabled;
    save.classList.add('hidden');

    this.changeBoolean.emit();
  }

}
