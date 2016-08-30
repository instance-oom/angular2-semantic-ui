# Dropdown Usage
<a href="https://github.com/lon-yang/angular2-semantic-ui/blob/master/components/dropdown/README_CN.md">简体中文</a>

```typesctript
  import { DROPDOWN_DIRECTIVES } from 'angular2-semantic-ui'
```
```html
  <lsu-dropdown [(ngModel)]="selectedItem" [data]="data"></lsu-dropdown>
  <lsu-dropdown [(ngModel)]="selectedItem" [data]="data" [textField]="fieldForShow"></lsu-dropdown>
  <lsu-dropdown [(ngModel)]="selectedItem" [data]="data" [textField]="fieldForShow" [placeHolder]="'select items'" [multiple]="'true'"></lsu-dropdown>  
```

# Options
- data: Required. Array&lt;any&gt;，When the array is stored `object`, you need to specify the `textField`
- textField: Optional，Specify which properties are used to display in the page
- placeHolder: Optional
- multiple: Optional，Default is false