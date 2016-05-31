import { Component, AfterContentInit, ContentChildren, Input } from '@angular/core';
import { TabComponent } from './tab';

@Component({
  selector: "lsu-tabset",
  template: `
    <div class="ui top attached tabular menu">
      <a class="item" *ngFor="let tab of tabs" [ngClass]="{'active': tab.active}" (click)="setTab(tab)">
        {{ tab.headerText }}
      </a>            
    </div>
    <ng-content></ng-content>
  `
})

export class TabSetComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  private tabs: Array<TabComponent> = [];

  constructor() {

  }

  setTab(tab: TabComponent): void {
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }

  ngAfterContentInit(): void {
    if (this.tabs.length == 0) {
      throw new Error("Cannot no tab in tabset.");
    }
    this.setTab(this.tabs[0]);
  }
}