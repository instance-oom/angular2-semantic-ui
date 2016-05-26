# Modal Usage

```typesctript
  import { MODAL_DIRECTIVES } from 'angular2-semantic-ui/components'
```
```html
  <lsu-modal [showModal]="showModal" [options]="modalOptions">
    <div class="header">
      Profile Picture
    </div>
    <div class="image content">
      <div class="ui medium image">
        <img src="/images/avatar/large/chris.jpg">
      </div>
      <div class="description">
        <div class="ui header">We've auto-chosen a profile image for you.</div>
        <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </div>
    </div>
    <div class="actions">
      <div class="ui black deny button">
        Nope
      </div>
      <div class="ui positive right labeled icon button">
        Yep, that's me
        <i class="checkmark icon"></i>
      </div>
    </div>
  </lsu-modal>
  
  modalOptions = {
    "size": "small",  //modal尺寸[ small | large | fullscreen]
    "type": "basic",  //modal类型[ basic ], 默认为空
    "closeable": true,
    "onApprove": (e) => {
      console.log(e);
      return true;
    },
    "onDeny": (e) => {
      console.log(e);
      return true;
    }
  }
```

# Options
- showModal: 必选，控制Loader显隐
- modalOptions: 可选，Modal配置 <a href="http://semantic-ui.com/modules/modal.html#/settings">Semantic-ui Modal Setting</a>