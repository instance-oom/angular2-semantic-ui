import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/common';

@Component({
  selector: 'lsu-modal',
  template: `
    <div class="ui dimmer modals page transition" [ngClass]="{'active': _showModal, 'visible':_showModal, 'hidden': !_showModal}" (click)="closeModal()">
      <div class="ui {{options.size || ''}} {{options.type || ''}} modal transition visible active" style="margin-top: -122.5px;" (click)="clickContent($event)">
        <ng-content></ng-content>    
      </div>
    </div>
  `
})

export class ModalComponent implements ControlValueAccessor {
  @Input()
  public options: any = {};

  @Output()
  public onHide: EventEmitter<any> = new EventEmitter();

  private _showModal: boolean;
  private onChange: Function;
  private onTouched: Function;
  private vm: NgModel

  constructor(vm: NgModel) {
    this.vm = vm;
    vm.valueAccessor = this;
  }

  public writeValue(value: boolean): void {
    if (value) {
      document.body.classList.add("dimmed");
    } else {
      this.onHide.next(this);
    }
    this._showModal = value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public ngAfterViewInit(): void {
    document.body.classList.add("dimmable");
  }

  private clickContent(event): void {
    event.stopPropagation();
  }

  private closeModal(): void {
    if (!this.options.closeable) {
      return;
    }
    let val = false;
    this.writeValue(val);
    this.vm.viewToModelUpdate(val);
  }
}