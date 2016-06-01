import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'lsu-accordionPanel',
  template: `
    <div class="title" [ngClass]="{'active': active}" (click)="setAccordion()">
      <i class="dropdown icon"></i>
      {{ title }}
    </div>
    <div class="content" [ngClass]="{'active': active}">
      <ng-content></ng-content>
    </div>
  `
})

export class AccordionPanelComponent {
  @Input()
  public title: string = "";

  @Input()
  public active: boolean = false;

  private parent: any;
  constructor() {

  }

  onChange(parent: any): void {
    this.parent = parent;
  }

  setAccordion(): void {
    this.parent.setAccordion(this);
  }
}