# Popup Usage

```typesctript
  import { POPUP_DIRECTIVES } from 'angular2-semantic-ui/compangular2-semantic-uionents'
```
```html
  <button type="button" class="ui button" lsu-popup [trigger]="'click'" [content]="'Popup One.'">
    Click to show popup
  </button>
  <button type="button" class="ui teal button" lsu-popup [trigger]="'hover'" [content]="'Popup Two.'">
    Hover to show popup
  </button>
  <div class="ui input">
    <input type="text" placeholder="Search..." lsu-popup [trigger]="'focus'" [content]="'Please input key word...'">
  </div>
```

# Options
- trigger: 可选，触发Popup的方式, 默认`hover`,可选值[ `hover` | `click` | `focus` ]
- content: 可选，提示文字