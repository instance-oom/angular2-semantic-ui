import { Component, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: "lsu-tab",
  styles:[
    `.ui.bottom.attached.tab.segment.active {
      border-top: none;
    }`
  ],
  template: `
    <div class="{{tabCls}}" [ngClass]="{'active': active}" style="margin: 0; width: 100%;">
      <ng-content></ng-content>      
    </div>
  `
})

export class TabComponent implements AfterContentInit {
  @Input()
  public headerText: string = "";

  @Input()
  public active: boolean = false;

  public tabCls: string;
  constructor() {

  }

  ngAfterContentInit(): void {
    if (!this.headerText) {
      throw new Error("Please provider header text");
    }
  }
}