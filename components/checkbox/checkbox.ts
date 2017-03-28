import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: "lsu-checkbox",
  styles: [
    ` .ui.checkbox > label {
        cursor: pointer;
      }
    `
  ],
  template: `
    <div class="ui {{type}} checkbox" [ngClass]="{'checked': checked}" (click)="toggleCheck($event)">
      <input type="checkbox" [attr.checked]="checked? 'checked' : null" [attr.disabled]="disabled ? 'disabled' : null">
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
  public disabled: boolean = false;

  @Input()
  public type: string;

  @Input()
  public label: string;

  @Output()
  onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private checked: boolean = false;
  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  constructor() {
  }

  writeValue(value: boolean): void {
    this.checked = value;
    this._onChange(value);
    this.onChange.next(value);
  }

  registerOnChange(fn: (_: any) => {}): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  toggleCheck(event: any): void {
    if (this.disabled) {
      return;
    }
    var value: boolean = !this.checked
    this.writeValue(value);
  }
}