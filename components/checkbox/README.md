# Dimmer Usage

```typesctript
  import { CHECKBOX_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'
```
```html
  <lsu-checkbox [(ngModel)]="isChecked" [disabled]="'false'" [readonly]="'true'" [label]="'CheckBox'" [type]="'slider'"></lsu-checkbox>
```

# Options
- disabled: 可选
- readonly: 可选，是否只读
- label: 可选，待显示文字
- type: 可选，checkbox样式，` [checkbox|slider|toggle] `