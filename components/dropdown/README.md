# Dropdown Usage

```html
  <lsu-dropdown [(ngModel)]="selectedItem" [data]="data"></lsu-dropdown>
  <lsu-dropdown [(ngModel)]="selectedItem" [data]="data" [textField]="fieldForShow"></lsu-dropdown>
```

# Options
- data: 必选，数组类型，当数组里面保存的是Object时，需要指定`textField`
- textField: 可选，指定哪个属性用于在界面上显示出来