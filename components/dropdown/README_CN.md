# Dropdown Usage

```typesctript
  import { DROPDOWN_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'
```
```html
  <lsu-dropdown [(ngModel)]="selectedItem" [data]="data"></lsu-dropdown>
  <lsu-dropdown [(ngModel)]="selectedItem" [data]="data" [textField]="fieldForShow"></lsu-dropdown>
  <lsu-dropdown [(ngModel)]="selectedItem" [data]="data" [textField]="fieldForShow" [placeHolder]="'select items'" [multiple]="'true'"></lsu-dropdown>  
```

# Options
- data: 必选，数组类型，当数组里面保存的是 `object` 时，需要指定`textField`
- textField: 可选，指定哪个属性用于在界面上显示出来
- placeHolder: 可选
- multiple: 可选，是否允许多选，默认不允许