import { Component, AfterContentInit, ContentChildren, QueryList, Input } from '@angular/core';
import { TabComponent } from './tab';

@Component({
  selector: "lsu-tabset",
  template: `
    <div class="{{tabSetCls}}">
      <a class="item" *ngFor="let tab of _tabs" [ngClass]="{'active': tab.active}" (click)="setTab(tab)">
        {{ tab.headerText }}
      </a>            
    </div>
    <ng-content select="lsu-tab"></ng-content>
  `
})

export class TabSetComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  private tabs: QueryList<TabComponent>;

  @Input()
  private type: string;

  private _tabs: Array<TabComponent> = [];
  private tabSetCls: string;
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

    let tabCls: string = "ui bottom attached tab segment";
    this.tabSetCls = "ui top attached tabular menu";
    if (this.type === "secondary") {
      this.tabSetCls = "ui secondary menu";
      tabCls = "ui tab segment";
    } else if (this.type === "pointing") {
      this.tabSetCls = "ui pointing secondary menu";
      tabCls = "ui tab segment";      
    }

    let hasActivedTab = false;
    for (let i = 0; i < this._tabs.length; i++) {
      let tab = this._tabs[i];
      tab.tabCls = tabCls;
      if (tab.active && !hasActivedTab) {
        this.setTab(tab);
        hasActivedTab = true;
      }
    }
    if (!hasActivedTab) {
      this.setTab(this._tabs[0]);
    }
  }
}