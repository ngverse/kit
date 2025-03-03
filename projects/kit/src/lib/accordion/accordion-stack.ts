import { Injectable } from '@angular/core';
import { STACK } from '../stack/stack';
import { AccordionItemDirective } from './accordion-item.directive';
import { AccordionDirective } from './accordion.directive';

@Injectable()
export class ACCORDION_STACK extends STACK<
  AccordionItemDirective,
  AccordionDirective
> {
  readonly opened$ = this.listen('opened');

  opened(item: AccordionItemDirective) {
    this.dispatch(item, { command: 'opened', source: item });
  }
}
