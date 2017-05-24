import { Component, Input, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'lsu-modal',
  styles: [
    ` .trans-fadeout{
        -webkit-transition:all 0.3s linear;
        -moz-transition:all 0.3s linear;
        -ms-transition:all 0.3s linear;
        -o-transition:all 0.3s linear;
        transition:all 0.3s linear;
      }
    `
  ],
  template: `
    <div class="ui dimmer modals page trans-fadeout" style="display: block !important" 
      [style.visibility] = "_showModal ? 'visible' : 'hidden'"
      [style.opacity] = "_showModal ? '1' : '0'"  
      (click)="closeModal()">
      <div id="{{id}}" class="ui {{options.size || ''}} {{options.type || ''}} modal active visibility" (click)="clickContent($event)">
        <ng-content></ng-content>    
      </div>
    </div>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ModalComponent),
    multi: true
  }]
})

export class ModalComponent implements ControlValueAccessor {
  @Input()
  public options: any = {};

  _showModal: boolean;
  element: any;
  id: string;
  _onChange = (_: any) => { };
  _onTouched = () => { };

  constructor() {
    this.id = `lsu_modal_${Math.random()}`
  }

  public writeValue(value: boolean): void {
    this._showModal = value;
    this._onChange(value);
    if (value) {
      document.body.classList.add("dimmed");
      var self = this;
      setTimeout(function () {
        let windowHeight = document.body.offsetHeight;
        let eleHeight = self.element.offsetHeight;
        let top = (windowHeight - eleHeight) / 2;
        self.element.style.top = top + 'px';
      });
    } else {
      document.body.classList.remove("dimmed");
    }
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  public ngAfterViewInit(): void {
    document.body.classList.add("dimmable");
    this.element = document.getElementById(this.id);
  }

  clickContent(event: any): void {
    event.stopPropagation();
  }

  closeModal(): void {
    if (!this.options.closeable) {
      return;
    }
    let val = false;
    this.writeValue(val);
  }
}