import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lsu-checkbox',
  template: `
    <div class="ui {{type}} checkbox" [ngClass]="{'checked': checked}">
      <input type="checkbox" id="{{_id}}" [ngModel]="checked" (ngModelChange)="valueChanged($event)" [disabled]="disabled">
      <label for="{{_id}}" style="cursor: pointer">{{ label }}</label>
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

  checked: boolean = false;
  _onChange = (_: any) => { };
  _onTouched = () => { };

  _id: string;

  constructor() {
  }

  ngOnInit() {
    this._id = `lsu_checkbox_${new Date().valueOf()}_${Math.random() * 10000}`;
  }

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  valueChanged(value: boolean) {
    this._onChange(value);
    this.onChange.emit(value);
  }
}
