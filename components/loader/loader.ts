import { Component, Input, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: "lsu-loader",
  template: `
    <div #loaderDiv class="ui dimmer" [ngClass]="{'active': active}">
      <div class="ui {{loaderSize}} text loader">{{ loaderText }}</div>
    </div>
  `
})

export class LoaderComponent {
  @ViewChild("loaderDiv") loaderDiv: ElementRef;

  _active: boolean;
  @Input()
  public set active(val: boolean) {
    this._active = val;
    this.toggleLoader();
  }
  public get active(): boolean {
    return this._active;
  }

  @Input()
  public loaderText: string

  @Input()
  public loaderSize: string

  parentEle: any

  constructor() {
  }

  ngAfterViewInit() {
    if (!this.parentEle) {
      this.parentEle = this.loaderDiv.nativeElement.parentElement.parentElement;
    }
  }

  toggleLoader() {
    if (!this.parentEle) return;
    if (this.active) {
      this.parentEle.classList.add("ui");
      this.parentEle.classList.add("segment");
    } else {
      this.parentEle.classList.remove("ui");
      this.parentEle.classList.remove("segment");
    }
  }
}