import { Component, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: "lsu-tab",
  styles: [
    `.ui.bottom.attached.tab.segment.active {
      border-top: none;
    }`
  ],
  template: `
    <div class="ui tab" [ngClass]="{'active': active, 'segment':useSegment, 'bottom':type == 'tabular', 'attached':type == 'tabular' }" style="margin: 0; width: 100%;">
      <ng-content></ng-content>      
    </div>
  `
})

export class TabComponent implements AfterContentInit {
  @Input()
  public headerText: string = "";

  @Input()
  public active: boolean = false;

  @Input()
  public useSegment: boolean = false;

  public type: string;
  constructor() {

  }

  ngAfterContentInit(): void {
    if (!this.headerText) {
      throw new Error("Please provider header text");
    }
  }
}