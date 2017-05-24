import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lsu-pagination',
  styles: [
    ` .disable_pagination {
        pointer-events: none;
        opacity: 0.6;
      }
    `
  ],
  template: `
    <div style="display: inline-block" [class.disable_pagination]="disabled">
      <p style="margin-bottom: 5px; text-align: center;" *ngIf="!options.hidenLabel">{{ currentPage }} of {{ totalPages }}</p>
      <div class="ui {{options.color || ''}} buttons">
        <a class="ui button" *ngIf="options.boundaryLinks" (click)="setPage(1)" [class.disabled]="currentPage == 1">
          {{ options.firstText || "<<" }}
        </a>
        <a class="ui button" *ngIf="options.directionLinks" (click)="pageUp()" [class.disabled]="currentPage == 1">
          {{ options.prevText || "Prev" }}
        </a>
        <a class="ui icon button" *ngIf="showPrevMoreBtn" (click)="prevMore()">
          <i class="ellipsis horizontal icon"></i>
        </a>
        <button class="ui icon button" [class.active]="pageIndex == currentPage" *ngFor="let pageIndex of pages" (click)="setPage(pageIndex)">
          {{ pageIndex }}
        </button>
        <a class="ui icon button" *ngIf="showNextMoreBtn" (click)="nextMore()">
          <i class="ellipsis horizontal icon"></i>
        </a>
        <a class="ui button" *ngIf="options.directionLinks" (click)="pageDown()" [class.disabled]="currentPage == totalPages">
          {{ options.nextText || "Next" }}
        </a>
        <a class="ui button" *ngIf="options.boundaryLinks" (click)="setPage(totalPages)" [class.disabled]="currentPage == totalPages">
          {{ options.lastText || ">>" }} 
        </a>
      </div>
    </div>
  `
})

export class PaginationComponent {
  @Input()
  set maxSize(value: number) {
    this._maxSize = value || 10;
    this.updateTotalPages();
  }
  get maxSize(): number {
    return this._maxSize;
  }

  @Input()
  set pageSize(value: number) {
    this._pageSize = value || 10;
    this.updateTotalPages();
  }
  get pageSize(): number {
    return this._pageSize;
  }

  @Input()
  set totalCount(value: number) {
    this._totalCount = value || 0;
    this.updateTotalPages();
  }
  get totalCount(): number {
    return this._totalCount;
  }

  @Input()
  set currentPage(value: number) {
    value = value || 1;
    const _temp = this._currentPage;
    this._currentPage = value < 1 ? 1 : value > this.totalPages ? this.totalPages : value;
    if (_temp === this._currentPage) {
      return; //avoid dead circulation
    }
    if (this._inited) {
      this.onSelectPage.next(value);
    }
  }
  get currentPage(): number {
    return this._currentPage;
  }

  @Input()
  disabled: boolean = false;

  @Input()
  options: any = {};

  @Output()
  onSelectPage: EventEmitter<any>;

  protected _maxSize: number;
  protected _pageSize: number;
  protected _totalCount: number;
  protected _currentPage: number;
  protected _inited: boolean = false;
  totalPages: number;
  pages: Array<number> = [];
  showPrevMoreBtn: boolean = false;
  showNextMoreBtn: boolean = false;

  constructor() {
    this.onSelectPage = new EventEmitter();
  }

  ngOnInit() {
    this._inited = true;
    this.options.directionLinks = this.options.directionLinks || true;
    this.options.boundaryLinks = this.options.boundaryLinks !== undefined ? this.options.boundaryLinks : false;
    this.updateTotalPages();
  }

  updateTotalPages(): void {
    if (!this._inited) return;
    let pageCount: number;
    if (this.totalCount !== undefined) {
      let pageSize = this.pageSize < 1 ? 1 : this.pageSize;
      pageCount = Math.ceil(this.totalCount / this.pageSize);
      pageCount = pageCount > 1 ? pageCount : 1;
    }
    if (this.totalPages < 1) {
      pageCount = 1;
    }
    this.totalPages = pageCount;
    this.setPage(this.currentPage);
  }

  getPages(currentPage: number, totalPage: number): Array<number> {
    let pages: Array<number> = [];
    let maxSize = this.maxSize;
    if (currentPage > totalPage) {
      currentPage = totalPage;
    }
    if (maxSize > totalPage) {
      maxSize = totalPage;
    }
    let beginPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
    let endPage = beginPage + maxSize - 1;
    if (endPage > totalPage) {
      endPage = totalPage;
      beginPage = endPage - maxSize + 1;
    }
    for (let i = beginPage; i <= endPage; i++) {
      pages.push(i);
    }
    this.showPrevMoreBtn = beginPage > 1;
    this.showNextMoreBtn = endPage < totalPage;
    return pages;
  }

  setPage(pageIndex: number, updateCurrentPage: boolean = true): void {
    if (pageIndex < 1) {
      pageIndex = 1;
    }
    if (pageIndex > this.totalPages) {
      pageIndex = this.totalCount;
    }
    if (updateCurrentPage) {
      this.currentPage = pageIndex;
    }
    this.pages = this.getPages(pageIndex, this.totalPages);
  }

  pageUp(): void {
    let pageIndex = this.currentPage - 1;
    this.setPage(pageIndex);
  }

  pageDown(): void {
    let pageIndex = this.currentPage + 1;
    this.setPage(pageIndex);
  }

  prevMore(): void {
    let pageIndex = this.pages[0] - 1;
    this.setPage(pageIndex, false);
  }

  nextMore(): void {
    let pageIndex = this.pages[this.pages.length - 1] + 1
    this.setPage(pageIndex, false);
  }
}