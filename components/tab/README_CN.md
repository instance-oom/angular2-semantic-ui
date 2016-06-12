# Tab Usage

```typesctript
  import { TAB_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'
```
```html
  <lsu-tabset type="'secondary'">
    <lsu-tab [headerText]="'First'">
      <h1>Tab First</h1>
    </lsu-tab>
    <lsu-tab [headerText]="'Second'" [active]="'true'">
      <h1>Tab Second</h1>
    </lsu-tab>
    <lsu-tab [headerText]="'Third'">
      <h1>Tab Third</h1>
    </lsu-tab>
  </lsu-tabset>
```

# Options
- headerText: 必选，Tab Header
- active: 可选，是否激活Tab页
- type: 可选, tab样式 `[ tabular | secondary | pointing ]` 默认 `tabular`