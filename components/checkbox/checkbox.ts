import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: "lsu-checkbox",
  template: `
    <div class="ui {{type}} checkbox" [ngClass]="{'checked': checked}">
      <input type="checkbox" [attr.checked]="checked? 'checked':null" [attr.disabled]="disabled ? 'disabled' : null" (click)="toggleCheck($event)">
      <label>{{ label }}</label>
    </div>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckBoxComponent),
    multi: true
  }]
})

export class CheckBoxComponent implements ControlValueAccessor {
  @Input()
  public checked: boolean = false;

  @Input()
  public disabled: boolean = false;

  @Input()
  public type: string;

  @Input()
  public label: string;

  @Output()
  private onChange: EventEmitter<any>;

  private _onChange: Function;
  private _onTouched: Function;
  private vm: NgModel
  constructor(vm: NgModel) {
    this.vm = vm;
    vm.valueAccessor = this;
    this.onChange = new EventEmitter();
  }

  public writeValue(value: boolean): void {
    this.checked = value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  toggleCheck(event: any): void {
    if (this.disabled) {
      return;
    }
    var value: boolean = !this.checked
    this.writeValue(value);
    this.vm.viewToModelUpdate(value);
    this.onChange.next(event);
  }
}