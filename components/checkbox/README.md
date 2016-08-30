# Checkbox Usage
<a href="https://github.com/lon-yang/angular2-semantic-ui/blob/master/components/checkbox/README_CN.md">简体中文</a>

```typesctript
  import { CHECKBOX_DIRECTIVES } from 'angular2-semantic-ui'
```
```html
  <lsu-checkbox [(ngModel)]="isChecked" [disabled]="'false'" [label]="'CheckBox'" [type]="'slider'" (onChange)="onChange($event)"></lsu-checkbox>
```

# Options
- disabled: Optional. Boolean
- label: Optional. The checkbox's label
- type: Optional. The checkbox's type,` [checkbox|slider|toggle] `, default is checkbox
- onChange: Optional.