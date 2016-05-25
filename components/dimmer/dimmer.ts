import { Component, Input, ElementRef } from '@angular/core'

@Component({
  selector: 'lsu-dimmer',
  template: `
    <div class="ui dimmer" [ngClass]="dimmerCls">
      <div class="content">
        <div class="center">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `
})

export class DimmerComponent {
  private dimmerCls: any
  private parentEle: any

  @Input()
  public set active(val: boolean) {
    if (this.parentEle) {
      if (val) {
        this.parentEle.classList.add("dimmable");
        this.parentEle.classList.add("dimmed");
      } else {
        this.parentEle.classList.remove("dimmable");
        this.parentEle.classList.remove("dimmed");
      }
      this.dimmerCls.active = val;
    }
  }

  constructor(el: ElementRef) {
    this.parentEle = el.nativeElement.parentElement;
    this.dimmerCls = {
      active: this.active
    }
  }
}