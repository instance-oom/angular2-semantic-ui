# Tags-Input Usage
<a href="https://github.com/lon-yang/angular2-semantic-ui/blob/master/components/tags-input/README_CN.md">简体中文</a>

```typesctript
  import { TagsInputComponent } from 'angular2-semantic-ui'
```
```html
  <lsu-tagsInput [(ngModel)]="Tags" [placeholder]="'Add Tag'"></lsu-tagsInput>
  <lsu-tagsInput [(ngModel)]="Tags" [placeholder]="'Add Tag'" [invalidMsg]="'Invalid ip address.'" [validators]="customValidator"></lsu-tagsInput>
```

# Options
- placeholder: Optional.
- invalidMsg: Optional. Active when has validators.
- validators: Optional. Array<ValidatorFn>.