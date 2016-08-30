# Accordion Usage
<a href="https://github.com/lon-yang/angular2-semantic-ui/blob/master/components/accordion/README_CN.md">简体中文</a>

```typesctript
  import { ACCORDION_DIRECTIVES } from 'angular2-semantic-ui'
```
```html
  <lsu-accordion [option]="accordOption">
    <lsu-accordionPanel [title]="'What is a dog?'">
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </lsu-accordionPanel>
    <lsu-accordionPanel [title]="'What kinds of dogs are there?'" [active]="'true'">
      <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
    </lsu-accordionPanel>
    <lsu-accordionPanel [title]="'How do you acquire a dog?'">
      <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
    </lsu-accordionPanel>
  </lsu-accordion>
```
```typescript
  accordOption = {
    "styled": true,
    "fluid": true,
    "inverted": false,
    "allowMultiple": false
  }
```

# Options
- option: Optional
  - styled: Boolean. accordion class, default is true
  - fluid: Boolean. accordion class, default is true
  - inverted: Boolean. accordion class, default is false
  - allowMultiple: Boolean. Whether to allow multiple Panel at the same time
- title: Required. Belong to `lsu-accordionPanel`, Panel's title
- active: Optional. Belong to `lsu-accordionPanel`, Configuration Panel is expanded, in the case of multiple Panel is not allowed to start at the same time, only the last one will be expanded