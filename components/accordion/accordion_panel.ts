import { Component, Input, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'lsu-accordionPanel',
  template: `
    <div class="title" [ngClass]="{'active': active}" (click)="setAccordion()">
      <i class="dropdown icon"></i>
      {{ title }}
    </div>
    <div class="content active" [@accordionPanelState]="panelState">
      <ng-content></ng-content>
    </div>
  `,
  animations: [
    trigger('accordionPanelState', [
      state('inactive', style({
        padding: '0 1em',
        overflow: 'hidden',
        height: 0
      })),
      state('active', style({
        padding: '.5em 1em 1.5em',
        overflow: 'initial',
        height: '*'
      })),
      transition('inactive => active', animate('150ms ease-in')),
      transition('active => inactive', animate('150ms ease-out'))
    ])
  ]
})

export class AccordionPanelComponent {
  @Input()
  public title: string = "";

  @Input()
  get active(): boolean {
    return this._active;
  }
  set active(v: boolean) {
    this._active = !!v;
    if (this._active) {
      this.panelState = 'active';
    } else {
      this.panelState = 'inactive';
    }
  }

  private _active: boolean = false;
  private panelState: string = 'inactive';
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