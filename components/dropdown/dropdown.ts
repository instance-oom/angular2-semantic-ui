import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/common';

@Component({
  selector: 'lsu-dropdown',
  styles: [`.active{ display:block !important; }`],
  template: `
    <div class="ui fluid selection dropdown" [ngClass]="{'active':active,'visible':active,'multiple':multiple}" (click)="toggleSelectPanel()">
      <i class="dropdown icon"></i>
      <div class="default text" *ngIf="!selectedItem || selectedItem.length == 0">
        {{ placeHolder }}
      </div>
      <div class="text" *ngIf=" selectedItem && !multiple ">
        {{ selectedItem[textField] || selectedItem }}
      </div>
      <div *ngIf="selectedItem && multiple">
        <a class="ui label transition visible" style="display: inline-block !important;" *ngFor="let item of selectedItem">
          {{ item[textField] || item }}
          <i class="delete icon" (click)="removeItem(item, $event)"></i>
        </a>
      </div>
      <div class="menu transition hidden" [class.hidden]="!active" [class.visible]="active">
        <div class="item" (click)="itemClick(item, $event)" *ngFor="let item of data">
          {{ item[textField] || item }}
        </div>
      </div>
    </div>
  `
})

export class DropdownComponent implements ControlValueAccessor {
  @Input()
  public data: Array<any>;

  @Input()
  public textField: string;

  @Input()
  public placeHolder: string = "";

  @Input()
  public multiple: boolean = false;

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
    if (this.multiple && !this.selectedItem) {
      this.selectedItem = [];
    }
  }

  toggleSelectPanel(): void {
    this.active = !this.active;
  }

  itemClick(item: any, event: any): void {
    let value: any;
    if (this.multiple) {
      value = this.selectedItem || [];
      let index = this.data.indexOf(item);
      if (index !== -1) {
        value.push(item);
        this.data.splice(index, 1);
      }
      event.stopPropagation();
    } else {
      value = item;
    }
    this.writeValue(value);
    this.vm.viewToModelUpdate(value);
  }

  removeItem(item: any, event: any): void {
    let value = this.selectedItem;
    let index = value.indexOf(item);
    if (index !== -1) {
      value.splice(index, 1);
      this.data.push(item);
    }
    this.writeValue(value);
    this.vm.viewToModelUpdate(value);
    event.stopPropagation();
  }
}