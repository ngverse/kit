import {
  Directive,
  ElementRef,
  HostAttributeToken,
  inject,
} from '@angular/core';

@Directive({
  selector: '[kitAccordionHeader]',
  host: {
    role: 'heading',
  },
})
export class AccordionHeaderDirective {
  private _element = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    const ariaLevel = inject(new HostAttributeToken('aria-level'), {
      optional: true,
    });

    if (!ariaLevel) {
      this._element.nativeElement.setAttribute('aria-hidden', 'true');
    }
  }
}
