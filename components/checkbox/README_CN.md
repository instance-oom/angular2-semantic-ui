# Checkbox Usage

```typesctript
  import { CHECKBOX_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'
```
```html
  <lsu-checkbox [(ngModel)]="isChecked" [disabled]="'false'" [label]="'CheckBox'" [type]="'slider'" (onChange)="onChange($event)"></lsu-checkbox>
```

# Options
- disabled: 可选
- label: 可选，待显示文字
- type: 可选，checkbox样式，` [checkbox|slider|toggle] `
- onChange: 可选, Change事件