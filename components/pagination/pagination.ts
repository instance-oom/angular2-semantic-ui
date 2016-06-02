import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lsu-pagination',
  styles: [
    ` .disable_pagination {
        pointer-events: none;
        opacity: 0.6;
        cursor: not-allowed;
      }
    `
  ],
  template: `
    <div style="display: inline-block" [class.disable_pagination]="disabled">
      <p style="margin-bottom: 5px; text-align: center;" *ngIf="!options.hidenLabel">{{ currentPage }} of {{ totalPages }}</p>
      <div class="ui {{options.color || ''}} buttons">
        <a class="ui button" *ngIf="options.boundaryLinks" (click)="toFirst()" [class.disabled]="currentPage == 1">
          {{ options.firstText || "<<" }}
        </a>
        <a class="ui button" *ngIf="options.directionLinks" (click)="pageUp()" [class.disabled]="currentPage == 1">
          {{ options.prevText || "Prev" }}
        </a>
        <button class="ui icon button" [class.active]="pageIndex == currentPage" *ngFor="let pageIndex of pages" (click)="setPage(pageIndex)">
          {{ pageIndex }}
        </button>
        <a class="ui button" *ngIf="options.directionLinks" (click)="pageDown()" [class.disabled]="currentPage == totalPages">
          {{ options.nextText || "Next" }}
        </a>
        <a class="ui button" *ngIf="options.boundaryLinks" (click)="toLast()" [class.disabled]="currentPage == totalPages">
          {{ options.lastText || ">>" }} 
        </a>
      </div>
    </div>
  `
})

export class PaginationComponent {
  @Input()
  private set maxSize(value: number) {
    if (this._maxSize !== value) {
      this._maxSize = value;
      this.pages = this.getPages();
    }
    this._maxSize = value;
  }
  private get maxSize(): number {
    return this._maxSize;
  }

  @Input()
  private set pageSize(value: number) {
    if (this._pageSize !== value) {
      this._pageSize = value;
      this.pages = this.getPages();
    }
    this._pageSize = value;
  }
  private get pageSize(): number {
    return this._pageSize;
  }

  @Input()
  private set totalCount(value: number) {
    if (this._totalCount !== value) {
      this._totalCount = value;
      this.pages = this.getPages();
    }
    this._totalCount = value;
  }
  private get totalCount(): number {
    return this._totalCount;
  }

  @Input()
  private set totalPages(value: number) {
    if (this._totalPages !== value) {
      this._totalPages = value;
      this.pages = this.getPages();
    }
    this._totalPages = value;
  }
  private get totalPages(): number {
    return this._totalPages;
  }

  @Input()
  private set currentPage(value: number) {
    this._currentPage = value < 1 ? 1 : value > this.totalPages ? this.totalPages : value;
    if (this.pages.indexOf(value) === -1) {
      this.pages = this.getPages();
    }
    if (this._inited) {
      this.onSelectPage.next(value);
    }
  }

  private get currentPage(): number {
    return this._currentPage;
  }

  @Input()
  private disabled: boolean = false;

  @Input()
  private options: any = {};

  @Output()
  private onSelectPage: EventEmitter<any>;

  protected _maxSize: number = 0;
  protected _pageSize: number = 10;
  protected _totalCount: number;
  protected _totalPages: number = 1;
  protected _currentPage: number = 0;
  protected _inited: boolean = false;
  private pages: Array<number> = [];

  constructor() {
    this.onSelectPage = new EventEmitter();
    this.options.position = "left";
    this.options.directionLinks = true;
    this.options.boundaryLinks = false;
  }

  ngOnInit() {
    this._inited = true;
    this.pages = this.getPages();
  }

  private getPages(): Array<number> {
    let pages = [];
    if (this.totalCount !== undefined) {
      this.totalPages = Math.ceil(this.totalCount / this.pageSize);
    }
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
    let prevCount = Math.ceil(this.maxSize / 2);
    if ((this.totalPages - this.currentPage) <= Math.floor(this.maxSize / 2)) {
      prevCount = this.maxSize - (this.totalPages - this.currentPage);
    }
    for (var i = this.currentPage; i > 0; i--) {
      pages.unshift(i);
      if (pages.length === prevCount) {
        break;
      }
    }
    for (var j = this.currentPage + 1; j <= this.totalPages; j++) {
      pages.push(j);
      if (pages.length === this.maxSize) {
        break;
      }
    }
    return pages;
  }

  private pageUp(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  private setPage(pageIndex: number): void {
    this.currentPage = pageIndex;
  }

  private pageDown(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  private toFirst(): void {
    this.currentPage = 1;
  }

  private toLast(): void {
    this.currentPage = this.totalPages;
  }
}