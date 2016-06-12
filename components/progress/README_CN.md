# Progress Usage

```typesctript
  import { PROGRESS_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'
```
```html
  <lsu-progress [label]="'Uploading file'" [percent]="percent" [text]="''" [color]="'teal'" [size]="'standard'"></lsu-progress>
```

# Options
- percent: 必选，进度（0-100）
- text: 可选，progress显示文字（50%、70%......）
- label: 可选，标签（显示在porgress下方）
- color: 可选，背景色, 具体可参见<a href="http://semantic-ui.com/modules/progress.html#color">Semantic-Ui Progress Color</a>
- size: 可选，控件尺寸, 具体可参见<a href="http://semantic-ui.com/modules/progress.html#size">Semantic-Ui Progress Size</a>