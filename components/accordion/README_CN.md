# Accordion Usage

```typesctript
  import { ACCORDION_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'
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
    "styled": true,     // 默认为true
    "fluid": true,      // 默认为true
    "inverted": false,  // 默认为false
    "allowMultiple": false  // 是否允许同时展开多个Panel，默认为false
  }
```

# Options
- option: 可选
  - styled: Boolean. accordion class, 默认为true
  - fluid: Boolean. accordion class, 默认为true
  - inverted: Boolean. accordion class, 默认为false
  - allowMultiple: Boolean. 是否允许同时展开多个Panel，默认为false
- title: String. `lsu-accordionPanel`的属性, Panel标题
- active: Boolean. `lsu-accordionPanel`的属性, Panel是否展开, 在不允许同时展开多个Panel的情况下, 只展开最后一个active的Panel