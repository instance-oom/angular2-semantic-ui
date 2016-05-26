# Loader Usage

```typesctript
  import { LOADER_DIRECTIVES } from 'angular2-semantic-ui/components'
```
```html
  <div (click)="toggleLoader()">
    <lsu-loader [active]="active" [loaderText]="loaderText" [loaderSize]="loaderSize"></lsu-loader>
  </div>
```

# Options
- active: 必选，控制Loader显隐
- loaderText: 可选，提示文字
- loaderSize: 可选，Loader尺寸[mini | small | medium | large]