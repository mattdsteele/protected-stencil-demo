
// myfixedcomponent: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './myfixedcomponent.core.js';
import {
  MyComponent
} from './myfixedcomponent.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    MyComponent
  ], opts);
}
