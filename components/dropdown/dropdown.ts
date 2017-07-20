import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'lsu-dropdown',
  styles: [`.active,.visible{ display:block !important; }`],
  host: {
    '(document:click)': 'onDocumentClick($event)'
  },
  template: `
      <div class="ui fluid selection dropdown" [attr.id]="id"
           [ngClass]="{'active':active,'visible':active,'multiple':multiple,'disabled':disabled}"
           (click)="toggleSelectPanel($event)">
          <i class="dropdown icon"></i>
          <div class="default text" *ngIf="!selectedItem || selectedItem.length == 0">
              {{ placeHolder }}
          </div>
          <div class="text" *ngIf="selectedItem && !multiple">
              {{ selectedItem[textField] || selectedItem }}
          </div>
          <div *ngIf="selectedItem && multiple">
              <a class="ui label transition visible" style="display: inline-block !important;" *ngFor="let item of selectedItem">
                  {{ item[textField] || item }}
                  <i class="delete icon" (click)="removeItem(item, $event)"></i>
              </a>
          </div>
          <div class="menu visible" #menuPanel [@menuPanelState]="menuPanelState"
               (@menuPanelState.start)="menuPanel.style.overflowY = 'hidden'"
               (@menuPanelState.done)="menuPanel.style.overflowY = 'auto'">
              <div class="item" [class.active]="isSelected(item)" [class.filtered]="isSelected(item) && multiple" (click)="itemClick(item, $event)" *ngFor="let item of data">
                  {{ item[textField] || item }}
              </div>
          </div>
      </div>
  `,
  animations: [
    trigger('menuPanelState', [
      state('inactive', style({
        height: 0,
        opacity: 0
      })),
      state('active', style({
        height: '*',
        opacity: 1
      })),
      transition('inactive <=> active', animate('200ms ease'))
    ])
  ],
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
  public disabled: boolean = false;

  @Input()
  public placeHolder: string = '';

  @Input()
  public multiple: boolean = false;

  @Output()
  public change: EventEmitter<any> = new EventEmitter<any>();

  get active(): boolean {
    return this._active;
  }
  set active(v: boolean) {
    this._active = !!v;
    if (this._active) {
      this.menuPanelState = 'active';
    } else {
      this.menuPanelState = 'inactive';
    }
  }


  selectedItem: any;
  menuPanelState: string = 'inactive';

  id: string;

  _active: boolean = false;
  _onChange = (_: any) => { };
  _onTouched = () => { };

  constructor() {
    this.id = `lsu_dropdown_${Math.random()}`;
  }

  writeValue(value: any): void {
    this.selectedItem = value;
    this.change.emit(value);
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

  onDocumentClick(event: any): void {
    let id: string = event.target.id;
    if (this.active && id !== this.id) {
      this.active = false;
    }
  }

  toggleSelectPanel(event?: any): void {
    this.active = !this.active;
    if (event) {
      event.target.id = this.id;
    }
  }

  isSelected(item: any): boolean {
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
