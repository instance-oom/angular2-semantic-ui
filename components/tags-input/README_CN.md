# Tags-Input 使用方法

```typesctript
  import { TagsInputComponent } from 'angular2-semantic-ui'
```
```html
  <lsu-tagsInput [(ngModel)]="Tags" [placeholder]="'Add Tag'"></lsu-tagsInput>
  <lsu-tagsInput [(ngModel)]="Tags" [placeholder]="'Add Tag'" [invalidMsg]="'Invalid ip address.'" [validators]="customValidator"></lsu-tagsInput>
```

# Options
- placeholder: 可选.
- invalidMsg: 可选. 仅当设置了`validators`后生效
- validators: 可选. Array<ValidatorFn>.