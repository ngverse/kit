import { Directive, inject, input } from '@angular/core';
import { parentOrNewStack } from '../stack/stack-providers';
import { ACCORDION_STACK } from './accordion-stack';

@Directive({
  selector: '[kitAccordion]',
  providers: [parentOrNewStack(ACCORDION_STACK)],
})
export class AccordionDirective {
  private _stack = inject(ACCORDION_STACK);
  multi = input(false);

  constructor() {
    this._stack.setHost(this);
  }
}
