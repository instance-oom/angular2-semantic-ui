import { Component, Input, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { AccordionPanelComponent } from './accordion_panel';

@Component({
  selector: 'lsu-accordion',
  template: `
    <div class="ui styled accordion" [ngClass]="getCls()">      
      <ng-content select="lsu-accordionPanel"></ng-content>
    </div>
  `
})

export class AccordionComponent implements AfterContentInit {
  @ContentChildren(AccordionPanelComponent)
  public accordions: QueryList<AccordionPanelComponent>;

  @Input()
  private option: any = {};

  private _accordions: Array<AccordionPanelComponent> = [];

  constructor() {

  }

  getCls(): any {
    let cls = {
      "styled": this.option.styled == undefined ? true : this.option.styled,
      "fluid": this.option.fluid == undefined ? true : this.option.fluid,
      "inverted": this.option.inverted == undefined ? false : this.option.inverted
    };
    return cls;
  }

  setAccordion(accordion: AccordionPanelComponent): void {
    let isActive = accordion.active;
    if (!this.option.allowMultiple) {
      this._accordions.forEach(a => a.active = false);
    }
    accordion.active = !isActive;
  }

  ngAfterContentInit(): void {
    this._accordions = this.accordions.toArray();
    var self = this;
    this._accordions.forEach(a => {
      a.onChange(self);
    })
    if (!this.option.allowMultiple) {
      let finded: any = {};
      for (var i = 0; i < this._accordions.length; i++) {
        var item = this._accordions[i];
        if (item.active) {
          item.active = false;
          finded = item;
        }
      }
      if (finded.active !== undefined) {
        finded.active = true;
      }
    }
  }
}