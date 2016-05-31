# Rating Usage

```typesctript
  import { RATING_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'
```
```html
  <lsu-rating [(ngModel)]="rating" [maxRating]="'10'" [type]="'heart'" [size]="'huge'"></lsu-rating>
```

# Options
- rating: 必选，当前评分
- maxRating: 必选，最大评分数
- type: 可选，评分图标类型 `[ heart | star(default)]`
- size: 科学，评分控件大小 `[ mini | tiny | small | normal(default) | large | huge | massive ]`