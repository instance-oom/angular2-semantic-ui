import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: "l-progress",
  template: `
    <div class="ui progress" [ngClass]="getCls()">
      <div class="bar" style="transition-duration: 300ms;" [style.width]="getPercent()">
        <div class="progress">{{ text || getPercent() }}</div>
      </div>
      <div class="label" *ngIf="label">{{ label }}</div>
    </div>
  `
})

export class ProgressComponent {
  @Input()
  public text: string;

  @Input()
  public label: string;

  @Input()
  public percent: number;

  private currentEle: any;
  constructor(ele: ElementRef) {
    this.currentEle = ele.nativeElement;
  }

  getCls(): Array<string> {
    var cls = this.currentEle.classList;
    if (this.percent >= 100) {
      cls.add('success');
    }
    return cls;
  }

  getPercent(): string {
    if (this.percent < 0) {
      return '0%';
    } else if (this.percent > 100) {
      return "100%";
    } else {
      return this.percent + '%';
    }
  }

}