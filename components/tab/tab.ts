import { Component, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: "lsu-tab",
  template: `
    <div class="ui bottom attached tab segment" [ngClass]="{'active': active}" style="margin: 0; width: 100%; border-top: none;">
      <ng-content></ng-content>      
    </div>
  `
})

export class TabComponent implements AfterContentInit {
  @Input()
  public headerText: string = "";

  @Input()
  public active: boolean = false;

  constructor() {

  }

  ngAfterContentInit(): void {
    if (!this.headerText) {
      throw new Error("Please provider header text");
    }
  }
}