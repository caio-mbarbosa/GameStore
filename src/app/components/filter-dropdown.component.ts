import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-dropdown',
  template: `
    <div class="dropdown">
      <label *ngIf="label" for="{{label}}">{{label}}</label>
      <select ngModel *ngIf="options" id="{{label}}" (ngModelChange)="selectOption($event)">
          <option *ngIf="!noAllOption" value="">------ all ------</option>
          <option *ngFor="let option of options"> {{ option }}</option>
      </select>
    </div>
  `,
  styles: `
  .dropdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3px;

    select {
        max-width: 225px;
        min-width: 150px;
        text-align-last:center;
        color: #222
    }
  } 
  `
})
export class FilterDropdownComponent {
  @Input() noAllOption?: boolean = false;
  @Input() options?: string[];
  @Input() label?: string;
  @Output() option = new EventEmitter<string>();

  selectOption(option: string) {
    this.option.emit(option);
  }
}
