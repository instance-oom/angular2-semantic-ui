# Pagination Usage
<a href="https://github.com/lon-yang/angular2-semantic-ui/blob/master/components/pagination/README_CN.md">简体中文</a>

```typesctript
  import { PAGINATION_DIRECTIVES } from 'angular2-semantic-ui'
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
- disabled:  Optional. Type of boolean. Default is false
- totalCount:  Required
- pageSize:  Optional. Default is 10
- currentPage:  Optional. Default is 1
- maxSize:  Optional. How many page numbers will show in the page. Default is 10
- onSelectPage:  Optional. The function receives page changes, $event is the selected page number
- options:  Optional.
  - color:  Optional. Type of string.
  - hidenLabel:  Optional. Whether to display the page prompts, Default is true
  - boundaryLinks:  Optional. Whether to display the first page button and the last page button, Default is false
  - firstText:  Optional. First page button's text, Default is First
  - lastText:  Optional. Last page button's text, Default is Last
  - directionLinks:  Optional. Whether to display the prev page button and the next page button, Default is true
  - prevText:  Optional. Prev page button's text
  - nextText:  Optional. Next page button's text