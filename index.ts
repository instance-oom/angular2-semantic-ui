import { CHECKBOX_DIRECTIVES } from './components/checkbox';
import { DIMMER_DIRECTIVES } from './components/dimmer';
import { DROPDOWN_DIRECTIVES } from './components/dropdown';
import { LOADER_DIRECTIVES } from './components/loader';
import { MODAL_DIRECTIVES } from './components/modal';
import { PROGRESS_DIRECTIVES } from './components/progress';
import { RATING_DIRECTIVES } from './components/rating';
import { TAB_DIRECTIVES } from './components/tab';
import { ACCORDION_DIRECTIVES } from './components/accordion';
import { POPUP_DIRECTIVES } from './components/popup';
import { PAGINATION_DIRECTIVES } from './components/pagination';
import { TAGS_INPUT_DIRECTIVES } from './components/tags-input';

export * from './components/checkbox';
export * from './components/dimmer';
export * from './components/dropdown';
export * from './components/loader';
export * from './components/modal';
export * from './components/progress';
export * from './components/rating';
export * from './components/tab';
export * from './components/accordion';
export * from './components/popup';
export * from './components/pagination';
export * from './components/tags-input';

export const SEMANTIC_UI_COMPONENTS: Array<any> = [
  ...ACCORDION_DIRECTIVES,  
  ...CHECKBOX_DIRECTIVES,
  ...DIMMER_DIRECTIVES,
  ...DROPDOWN_DIRECTIVES,
  ...LOADER_DIRECTIVES,
  ...MODAL_DIRECTIVES,
  ...PROGRESS_DIRECTIVES,
  ...RATING_DIRECTIVES,
  ...TAB_DIRECTIVES,
  ...POPUP_DIRECTIVES,
  ...PAGINATION_DIRECTIVES,
  ...TAGS_INPUT_DIRECTIVES
]