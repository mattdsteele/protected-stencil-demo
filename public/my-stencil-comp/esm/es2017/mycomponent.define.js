
// mycomponent: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './mycomponent.core.js';
import {
  MyComponent
} from './mycomponent.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    MyComponent
  ], opts);
}
