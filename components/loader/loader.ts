import { Component, Input, ElementRef } from '@angular/core'

@Component({
  selector: "lsu-loader",
  template: `
    <div class="ui dimmer" [ngClass]="{'active': isActive}">
      <div class="ui {{loaderSize}} text loader">{{ loaderText }}</div>
    </div>
  `
})

export class LoaderComponent {
  @Input()
  public set active(val: boolean) {
    this.isActive = val;
    if (this.parentEle) {
      if (val) {
        this.parentEle.classList.add("ui");
        this.parentEle.classList.add("segment");
      } else {
        this.parentEle.classList.remove("ui");
        this.parentEle.classList.remove("segment");
      }
    }
  }

  @Input()
  public loaderText: string

  @Input()
  public loaderSize: string

  private parentEle: any
  private isActive: boolean

  constructor(el: ElementRef) {
    this.parentEle = el.nativeElement.parentElement;
  }
}