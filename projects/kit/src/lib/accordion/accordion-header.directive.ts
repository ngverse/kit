import { Directive, input } from '@angular/core';

@Directive({
  selector: '[kitAccordionHeader]',
  host: {
    role: 'heading',
    '[attr.aria-level]': 'a11yAriaLevel()',
  },
})
export class AccordionHeaderDirective {
  a11yAriaLevel = input<string>('3');
}
