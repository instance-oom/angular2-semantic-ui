# angular2-semantic-ui
[![peerDependencies Status](https://david-dm.org/lon-yang/angular2-semantic-ui/peer-status.svg)](https://david-dm.org/lon-yang/angular2-semantic-ui?type=peer)
[![npm version](https://badge.fury.io/js/angular2-semantic-ui.svg)](https://badge.fury.io/js/angular2-semantic-ui)
[![npm downloads](https://img.shields.io/npm/dt/angular2-semantic-ui.svg)](https://www.npmjs.com/package/angular2-semantic-ui)
[![licence](https://img.shields.io/npm/l/angular2-semantic-ui.svg)](https://opensource.org/licenses/MIT)
[![Analytics](https://ga-beacon.appspot.com/UA-80126017-1/welcome-page)](https://github.com/lon-yang/angular2-semantic-ui)

Angular2 Components for <a href="http://semantic-ui.com/">Semantic UI</a>
<br>
`No jQuery Dependency`

# Install
```
npm install angular2-semantic-ui --save
import { L_SEMANTIC_UI_MODULE } from 'angular2-semantic-ui';
```

# Demo 
[Online](https://lon-yang.github.io/angular2-semantic-ui-demo) - [Source Code](https://github.com/lon-yang/angular2-semantic-ui-demo)
```cmd
git clone https://github.com/lon-yang/angular2-semantic-ui-demo.git
cd angular2-semantic-ui-demo
npm install
npm start
```

# Current Included Components
- <a href="https://github.com/lon-yang/angular2-semantic-ui/tree/master/components/checkbox">CheckBox</a>
- <a href="https://github.com/lon-yang/angular2-semantic-ui/tree/master/components/dimmer">Dimmer</a>
- <a href="https://github.com/lon-yang/angular2-semantic-ui/tree/master/components/dropdown">Dropdown</a>
- <a href="https://github.com/lon-yang/angular2-semantic-ui/tree/master/components/loader">Loader</a>
- <a href="https://github.com/lon-yang/angular2-semantic-ui/tree/master/components/progress">Progress</a>
- <a href="https://github.com/lon-yang/angular2-semantic-ui/tree/master/components/rating">Rating</a>
- <a href="https://github.com/lon-yang/angular2-semantic-ui/tree/master/components/modal">Modal</a>
- <a href="https://github.com/lon-yang/angular2-semantic-ui/tree/master/components/tab">Tab</a>
- <a href="https://github.com/lon-yang/angular2-semantic-ui/tree/master/components/accordion">Accordion</a>
- <a href="https://github.com/lon-yang/angular2-semantic-ui/tree/master/components/popup">Popup</a>
- <a href="https://github.com/lon-yang/angular2-semantic-ui/tree/master/components/pagination">Pagination</a>
- <a href="https://github.com/lon-yang/angular2-semantic-ui/tree/master/components/tags-input">Tags-Input</a>

# Using with Systemjs
Please see [systemjs.config.js](https://github.com/lon-yang/angular2-semantic-ui/blob/master/systemjs.config.js)

# Change Log

- 2016-06-02 Add Pagination Component
- 2016-06-03 Fix bug
- 2016-06-10 Dropdown support multiple
- 2016-06-11 Fix tabset component's bug
- 2016-06-12 Improve tabset and add onChange event for checkbox, fix some bug
- 2016-07-24 Upgrade angular2 to `rc4` and remove unused dependencies
- 2016-08-30 Add component of `lsu-tagsInput`
- 2016-09-18 Upgrade angular2 to `final`, Optimization code
- 2016-10-19 Upgrade angular2 to `2.1.0`, Optimization code and add animation
- 2016-11-13 Support NgModule, fix #5
- 2017-03-28 Support Angular 4.0.0 (version 2.0.0 will need angular 4.0.0 and later)
- 2017-05-24 Support `AOT`