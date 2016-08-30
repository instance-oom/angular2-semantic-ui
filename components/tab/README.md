# Tab Usage
<a href="https://github.com/lon-yang/angular2-semantic-ui/blob/master/components/tab/README_CN.md">简体中文</a>

```typesctript
  import { TAB_DIRECTIVES } from 'angular2-semantic-ui'
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
- headerText: Required，Tab's title
- active: Optional. Whether to activate the tab page
- type: Optional. Tab's type ` [ tabular | secondary | pointing ] `, default is `tabular`