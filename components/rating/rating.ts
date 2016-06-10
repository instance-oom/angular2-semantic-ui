import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/common';

@Component({
  selector: 'lsu-rating[ngModel]',
  template: `
    <div class="ui {{ type }} {{ size }} rating">
      <i class="icon" *ngFor="let item of ratings" [ngClass]="{'active': item <= rating }" (click)="setRating(item)"></i>
    </div>
  `
})

export class RatingComponent implements ControlValueAccessor {
  @Input()
  public set maxRating(val: number) {
    this._maxRating = val;
    this.ratings = this.getRatings(val);
  }
  public get maxRating(): number {
    return this._maxRating;
  }
  protected _maxRating: number = 1;

  @Input()
  public rating: number = 0;

  @Input()
  public type: string = "star";

  @Input()
  public size: string = "";

  private ratings: Array<number>;

  private onChange: Function;
  private onTouched: Function;
  private vm: NgModel

  constructor(vm: NgModel) {
    this.vm = vm;
    vm.valueAccessor = this;
  }

  public writeValue(value: any): void {
    this.rating = value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public ngOnInit(): void {
    this.type = this.type.toLowerCase();
    this.size = this.size.toLowerCase();
    this.ratings = this.getRatings(this.maxRating);
  }

  private getRatings(size: number): Array<number> {
    let ratings:Array<number> = [];
    for (let i = 0; i < size; i++) {
      ratings.push(i + 1);
    }
    return ratings;
  }

  private setRating(item: number): void {
    this.writeValue(item);
    this.vm.viewToModelUpdate(item);
  }
}