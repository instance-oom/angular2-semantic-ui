import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'lsu-rating',
  template: `
    <div class="ui {{ type }} {{ size }} rating">
      <i class="icon" *ngFor="let item of ratings" [ngClass]="{'active': item <= rating }" (click)="setRating(item)"></i>
    </div>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingComponent),
    multi: true
  }]
})

export class RatingComponent implements ControlValueAccessor {
  @Input()
  public set maxRating(val: number) {
    this._maxRating = val;
    if (this.rating > val) {
      this.setRating(val);
    }
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

  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  constructor() {
  }

  public writeValue(value: any): void {
    this.rating = value;
    this._onChange(value);
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  public ngOnInit(): void {
    this.type = this.type.toLowerCase();
    this.size = this.size.toLowerCase();
    this.ratings = this.getRatings(this.maxRating);
  }

  private getRatings(size: number): Array<number> {
    let ratings: Array<number> = [];
    for (let i = 0; i < size; i++) {
      ratings.push(i + 1);
    }
    return ratings;
  }

  private setRating(item: number): void {
    this.writeValue(item);
  }
}