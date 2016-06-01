import { Component, AfterContentInit, ContentChildren, QueryList, Input } from '@angular/core';
import { TabComponent } from './tab';

@Component({
  selector: "lsu-tabset",
  template: `
    <div class="ui top attached tabular menu">
      <a class="item" *ngFor="let tab of _tabs" [ngClass]="{'active': tab.active}" (click)="setTab(tab)">
        {{ tab.headerText }}
      </a>            
    </div>
    <ng-content select="lsu-tab"></ng-content>
  `
})

export class TabSetComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  public tabs: QueryList<TabComponent>;

  private _tabs: Array<TabComponent> = [];
  constructor() {
  }

  setTab(tab: TabComponent): void {
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }

  ngAfterContentInit(): void {
    this._tabs = this.tabs.toArray();
    if (this._tabs.length == 0) {
      throw new Error("Cannot no tab in tabset.");
    }
    for (var i = 0; i < this._tabs.length; i++) {
      let tab = this._tabs[i];
      if (tab.active) {
        this.setTab(tab);
        break;
      }
    }
  }
}