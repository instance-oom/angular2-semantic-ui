# Pagination Usage

```typesctript
  import { PAGINATION_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'
```
```html
  <lsu-pagination [disabled]="pagerDisabled" [totalCount]="totalCount" [pageSize]="10" [currentPage]="2" [maxSize]="5" [options]="pageOptions" (onSelectPage)="onSelectPage($event)"></lsu-pagination>
```
```typescript
disabled = false

pageOptions = {
  "color": "default",
  "hidenLabel": false,
  "boundaryLinks": false,
  "firstText": "First",
  "lastText": "Last",
  "directionLinks": true,
  "prevText": "<",
  "nextText": ">"
}

onSelectPage(pageIndex): void {
  console.log("current page: ", pageIndex);
}
```

# Options
- disabled: 可选，用于控制Pagination是否可操作
- totalCount: 必选，总的数量
- pageSize: 可选，每页的大小，默认10
- currentPage: 可选，当前选中页，默认第一页
- maxSize: 可选，显示多少个页码，默认10
- options: 可选
  - color: "default"，控件颜色，参考semantic-ui颜色class
  - hidenLabel: true，是否显示页码提示，类似 `2 of 10`，默认开启
  - boundaryLinks: false，是否显示 `第一页` 和 `最后一页` 按钮，默认关闭
  - firstText: "First"，`第一页` 按钮提示文字，`boundaryLinks` 开启有效
  - lastText: "Last"，`最后一页` 按钮提示文字，`boundaryLinks` 开启有效
  - directionLinks: true，是否显示 `上一页` 和 `下一页` 按钮，默认开启
  - prevText: "<"，`上一页` 按钮提示文字，`directionLinks` 开启有效
  - nextText: ">"，`下一页` 按钮提示文字，`directionLinks` 开启有效
- onSelectPage: 可选，接收页码变化的函数，`$event` 选中的页码  