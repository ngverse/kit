import { Directive, inject } from '@angular/core';
import { AccordionItemDirective } from './accordion-item.directive';

@Directive({
  selector: '[kitAccordionPanel]',
  host: {
    '[id]': 'id',
    role: 'region',
    '[attr.aria-labelledby]': 'titleId',
  },
})
export class AccordionPanelDirective {
  private accordion = inject(AccordionItemDirective);

  id = this.accordion.panelId;
  titleId = this.accordion.titleId;
}
