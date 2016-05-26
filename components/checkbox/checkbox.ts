import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/common';

@Component({
  selector: "lsu-checkbox",
  template: `
    <div class="ui {{type}} checkbox" [ngClass]="{'checked': checked, 'read-only': readonly}" (click)="toggleCheck()">
      <input type="checkbox" [attr.disabled]="disabled">
      <label>{{ label }}</label>
    </div>
  `
})

export class CheckBoxComponent implements ControlValueAccessor {
  @Input()
  public checked: boolean = false;

  @Input()
  public disabled: boolean = false;

  @Input()
  public readonly: boolean = false;

  @Input()
  public type: string;

  @Input()
  public label: string;

  private onChange: Function;
  private onTouched: Function;
  private vm: NgModel
  constructor(vm: NgModel) {
    this.vm = vm;
    vm.valueAccessor = this;
  }

  public writeValue(value: boolean): void {
    this.checked = value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  toggleCheck(): void {
    if (this.disabled) {
      return;
    }
    var value: boolean = !this.checked
    this.writeValue(value);
    this.vm.viewToModelUpdate(value);
  }
}