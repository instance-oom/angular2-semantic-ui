# Progress Usage
<a href="https://github.com/lon-yang/angular2-semantic-ui/blob/master/components/progress/README_CN.md">简体中文</a>

```typesctript
  import { PROGRESS_DIRECTIVES } from 'angular2-semantic-ui'
```
```html
  <lsu-progress [label]="'Uploading file'" [percent]="percent" [text]="''" [color]="'teal'" [size]="'standard'"></lsu-progress>
```

# Options
- percent:  Required. 0-100
- text:  Optional. Just like 50% 、70% 、90%...
- label:  Optional. Shown below porgress
- color:  Optional. see Semantic-Ui Progress Color
- size:  Optional. ` [ tiny | small | standard | large | big ] `, Default is standard