import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'lsu-dropdown',
  styles: [`.active{ display:block !important; }`],
  host: {
    '(document:click)': 'onDocumentClick($event)'
  },
  template: `
    <div class="ui fluid selection dropdown" [attr.id]="id" 
      [ngClass]="{'active':active,'visible':active,'multiple':multiple}" 
      (click)="toggleSelectPanel($event)">
      <i class="dropdown icon"></i>
      <div class="default text" *ngIf="!selectedItem || selectedItem.length == 0">
        {{ placeHolder }}
      </div>
      <div class="text" *ngIf=" selectedItem && !multiple ">
        {{ selectedItem[textField] || selectedItem }}
      </div>
      <div *ngIf="selectedItem && multiple"  [attr.id]="id+'_1'">
        <a class="ui label transition visible" style="display: inline-block !important;" *ngFor="let item of selectedItem">
          {{ item[textField] || item }}
          <i class="delete icon" (click)="removeItem(item, $event)"></i>
        </a>
      </div>
      <div class="menu transition hidden" [class.hidden]="!active" [class.visible]="active">
        <div class="item" [class.active]="isSelected(item)" [class.filtered]="isSelected(item) && multiple" (click)="itemClick(item, $event)" *ngFor="let item of data">
          {{ item[textField] || item }}
        </div>
      </div>
    </div>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownComponent),
    multi: true
  }]
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

  private id: string;

  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  constructor() {
    this.id = `lsu_dropdown_${Math.random()}`;
  }

  writeValue(value: any): void {
    this.selectedItem = value;
    this._onChange(value);
  }

  registerOnChange(fn: (_: any) => {}): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  ngOnInit(): void {
    if (!this.multiple) return;
    this.selectedItem = this.selectedItem || [];
    for (let i = 0; i < this.selectedItem.length; i++) {
      let initItem = this.selectedItem[i];
      for (let j = 0; j < this.data.length; j++) {
        let candidateItem = this.data[j];
        if (JSON.stringify(initItem) === JSON.stringify(candidateItem)) {
          this.selectedItem[i] = this.data[j];
          break;
        }
      }
    }
  }

  private onDocumentClick(event: any): void {
    let id: string = event.target.id;
    if (this.active && id !== this.id && id !== `${this.id}_1`) {
      this.active = false;
    }
  }

  private toggleSelectPanel(event?: any): void {
    this.active = !this.active;
  }

  private isSelected(item: any): boolean {
    if (!this.selectedItem) {
      return false;
    }
    if (this.multiple) {
      let index: number = this.selectedItem.indexOf(item);
      return index !== -1;
    } else {
      return this.selectedItem === item;
    }

  }

  itemClick(item: any, event: any): void {
    let value: any;
    if (this.multiple) {
      value = this.selectedItem || [];
      value.push(item);
      if (value.length === this.data.length) {
        this.toggleSelectPanel();
      }
    } else {
      value = item;
      this.toggleSelectPanel();
    }
    this.writeValue(value);
    event.stopPropagation();
  }

  removeItem(item: any, event: any): void {
    let value: any = this.selectedItem;
    let index: number = value.indexOf(item);
    if (index !== -1) {
      value.splice(index, 1);
    }
    this.writeValue(value);
    event.stopPropagation();
  }
}