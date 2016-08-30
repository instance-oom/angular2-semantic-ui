# Modal Usage
<a href="https://github.com/lon-yang/angular2-semantic-ui/blob/master/components/modal/README_CN.md">简体中文</a>

```typesctript
  import { MODAL_DIRECTIVES } from 'angular2-semantic-ui'
```
```html
  <lsu-modal [(ngModel)]="showModal" [options]="modalOptions">
    <div class="header">
      Profile Picture
    </div>
    <div class="image content">
      <div class="description">
        <div class="ui header">We've auto-chosen a profile image for you.</div>
        <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated
          with your registered e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </div>
    </div>
    <div class="actions">
      <div class="ui black deny button" (click)="cancel()">
        Nope
      </div>
      <div class="ui positive right labeled icon button">
        Yep, that's me
        <i class="checkmark icon"></i>
      </div>
    </div>
  </lsu-modal>
  <button class="ui button" (click)="activeModal()">Active Modal</button>
```
```typescript
  modalOptions = {
    "size": "small",
    "type": "basic",
    "closeable": true
  }
  
  activeModal(): void {
    this.showModal = true;
  }

  cancel(): void {
    this.showModal = false;
  }
```

# Options
- ngModel: Required. Boolean. Used to control the Modal's explicit
- modalOptions: Optional. Modal's options
  - size: Optional. Modal's size ` [ small | large | fullscreen] `
  - type: Optional. Modal's type ` [ basic | default ]`
  - closeable: Optional