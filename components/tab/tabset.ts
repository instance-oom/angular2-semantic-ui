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
  tabs: QueryList<TabComponent>;

  @Input()
  set type(val: string) {
    if (this._type !== val) {
      this.generateClass(val);
    }
    this._type = val;
  };

  get type(): string {
    return this._type;
  }

  _tabs: Array<TabComponent> = [];
  _type: string = 'tabular';
  tabSetCls: string;
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

    this.generateClass(this.type);

    let hasActivedTab = false;
    for (let i = 0; i < this._tabs.length; i++) {
      let tab = this._tabs[i];
      tab.type = this.type;
      if (tab.active && !hasActivedTab) {
        this.setTab(tab);
        hasActivedTab = true;
      }
    }
    if (!hasActivedTab) {
      this.setTab(this._tabs[0]);
    }
  }

  generateClass(type: string): void {
    if (type === "secondary") {
      this.tabSetCls = "ui secondary menu";
    } else if (type === "pointing") {
      this.tabSetCls = "ui pointing secondary menu";
    } else {
      this.tabSetCls = "ui top attached tabular menu";
    }
    this._tabs.forEach(t => t.type = type);
  }
}