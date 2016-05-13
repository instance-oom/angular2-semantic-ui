import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/common';

@Component({
  selector: 'dropdown',
  styles: [`.active{ display:block !important; }`],
  template: `
    <div class="ui selection dropdown" (click)="toggleSelectPanel()">
      <i class="dropdown icon"></i>
      <div class="default text">{{ selectedItem[textField] || selectedItem }}</div>
      <div class="menu transition hidden" [ngClass]="itemsCls">
        <div class="item" (click)="itemClick(item)" *ngFor="let item of data;">{{ item[textField] || item }}</div>
      </div>
    </div>
  `
})

export class DropdownComponent implements ControlValueAccessor {
  @Input()
  public data: Array<any>;

  @Input()
  public textField: string;

  private selectedItem: any;
  private itemsCls: any;

  private onChange: Function;
  private onTouched: Function;
  private vm: NgModel

  constructor(vm: NgModel) {
    this.vm = vm;
    vm.valueAccessor = this;
    this.itemsCls = {
      "hidden": true,
      "active": false
    }
  }

  public writeValue(value: any): void {
    this.selectedItem = value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  toggleSelectPanel() {
    this.itemsCls.hidden = !this.itemsCls.hidden;
    this.itemsCls.active = !this.itemsCls.active;
  }

  itemClick(item: any) {
    this.writeValue(item);
    this.vm.viewToModelUpdate(item);
  }
}