import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[lsu-popup]',
  host: {
    '(click)': 'onClick()',
    '(focus)': 'onFocus()',
    '(focusout)': 'onFocusOut()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(window:resize)': 'onResize()'
  }
})

export class PopupDirective {
  @Input()
  content: string = "";

  @Input()
  trigger: string = "hover";

  element: any;
  popupEle: any;
  timeout: any;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    let id = `lsu_popup_${Math.random()}`;
    let div: any = document.createElement('div');
    div.id = id;
    div.className = "ui custom popup top left transition hidden";
    div.style = `word-wrap: break-word; bottom: auto; right: auto;`;
    div.innerHTML = this.content;
    this.element.parentElement.appendChild(div);
    this.popupEle = document.getElementById(id);
    this.setPosition();
  }

  setPosition(): void {
    let top = this.element.offsetTop;
    let left = this.element.offsetLeft;
    let height = this.popupEle.offsetHeight;
    this.popupEle.style.top = top - height - 10 + 'px';
    this.popupEle.style.left = left + 'px';
  }

  show(): void {
    this.popupEle.classList.remove('hidden');
    this.popupEle.classList.add('visible');
    this.setPosition();
  }

  hidden(): void {
    this.popupEle.classList.remove('visible');
    this.popupEle.classList.add('hidden');
  }

  isActived(): boolean {
    return this.popupEle.classList.contains('visible');
  }

  onClick() {
    if (this.trigger === 'click') {
      if (this.isActived()) {
        this.hidden();
      } else {
        this.show();
      }
    }
  }

  onFocus() {
    if (this.trigger === 'focus') {
      this.show();
    }
  }

  onFocusOut() {
    if (this.trigger === 'focus') {
      this.hidden();
    }
  }

  onMouseEnter() {
    if (this.trigger === 'hover') {
      this.show();
    }
  }

  onMouseLeave() {
    if (this.trigger === 'hover') {
      this.hidden();
    }
  }

  onResize() {
    this.setPosition();
  }
}