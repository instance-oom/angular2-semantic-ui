import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/common';

@Component({
  selector: 'lsu-dropdown',
  styles: [`.active{ display:block !important; }`],
  template: `
    <div class="ui fluid selection dropdown" [class.active]="active" [class.visible]="active" (click)="toggleSelectPanel()">
      <i class="dropdown icon"></i>
      <div class="text">{{ selectedItem[textField] || selectedItem }}</div>
      <div class="menu transition hidden" [class.hidden]="!active" [class.visible]="active">
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
  private active: boolean = false;

  private onChange: Function;
  private onTouched: Function;
  private vm: NgModel

  constructor(vm: NgModel) {
    this.vm = vm;
    vm.valueAccessor = this;
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

  public ngOnInit(): void {
    if (!this.selectedItem) {
      this.itemClick(this.data[0]);
    }
  }

  toggleSelectPanel() {
    this.active = !this.active;
  }

  itemClick(item: any) {
    this.writeValue(item);
    this.vm.viewToModelUpdate(item);
  }
}