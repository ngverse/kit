import { Directive, inject } from '@angular/core';
import { AccordionItemDirective } from './accordion-item.directive';

@Directive({
  selector: 'button[kitAccordionTitle]',
  host: {
    '[attr.aria-controls]': 'panelId',
    '[attr.aria-expanded]': 'accordionItem.expanded()',
    '[id]': 'id',
    '(click)': 'accordionItem.toggle()',
  },
})
export class AccordionTitleDirective {
  accordionItem = inject(AccordionItemDirective);

  private accordion = inject(AccordionItemDirective);

  readonly panelId = this.accordion.panelId;
  readonly id = this.accordion.titleId;
}
