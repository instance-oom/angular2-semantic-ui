import { Component, Input } from '@angular/core';

@Component({
  selector: "lsu-tab",
  template: `
    <div class="ui bottom attached tab segment" [ngClass]="{'active': active}">
      <ng-content></ng-content>      
    </div>
  `
})

export class TabComponent {
  @Input()
  public headerText: string;

  public active: boolean = false;

  constructor() {

  }
}