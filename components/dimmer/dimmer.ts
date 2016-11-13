import { Component, Input, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'lsu-dimmer',
  template: `
    <div #dimmerDiv class="ui dimmer" [ngClass]="{'active': active}">
      <div class="content">
        <div class="center">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `
})

export class DimmerComponent {
  @ViewChild("dimmerDiv") dimmerDiv: ElementRef;

  private parentEle: any
  private _active: boolean;

  @Input()
  public set active(val: boolean) {
    this._active = val;
    this.toggleDimmer()
  }
  public get active(): boolean {
    return this._active;
  }

  constructor() {
  }

  ngAfterViewInit() {
    if (!this.parentEle) {
      this.parentEle = this.dimmerDiv.nativeElement.parentElement.parentElement;
    }
    this.toggleDimmer();
  }

  toggleDimmer() {
    if (!this.parentEle) return;
    if (this.active) {
      this.parentEle.classList.add("dimmable");
      this.parentEle.classList.add("dimmed");
    } else {
      this.parentEle.classList.remove("dimmable");
      this.parentEle.classList.remove("dimmed");
    }
  }
}