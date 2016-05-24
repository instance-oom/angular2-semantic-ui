import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'modal',
  template: `
    <div class="ui {{options.size || ""}} {{options.type || ""}} modal">
      <ng-content></ng-content>
    </div>
  `
})

export class ModalComponent {
  @Input()
  public options: any = {};

  @Input()
  public set showModal(val: boolean) {
    this._showModal = val;
    if (this.modal) {
      if (val) {
        this.modal.modal('show');
      } else {
        this.modal.modal('hide');
      }
    }
  }

  private _showModal: boolean;
  private elf: any;
  private modal: any;
  constructor(elf: ElementRef) {
    this.elf = elf.nativeElement;
  }

  public ngAfterViewInit(): void {
    this.elf = window.jQuery(this.elf).children();
    this.modal = this.elf.modal({
      "closable": this.options.closable || true,
      "onHidden": () => {
        this.showModal = false;
      },
      "onApprove": (element) => {
        if (this.options.onApprove && typeof this.options.onApprove == "function") {
          return this.options.onApprove(element);
        } else {
          return true;
        }
      },
      "onDeny": (element) => {
        if (this.options.onDeny && typeof this.options.onDeny == "function") {
          return this.options.onDeny(element);
        } else {
          return true;
        }
      }
    })
    if (this._showModal) {
      this.modal.modal('show');
    }
  }
}