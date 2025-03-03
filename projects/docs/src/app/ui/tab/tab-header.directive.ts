import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[docTabHeader]',
})
export class TabHeaderDirective {
  templateRef = inject(TemplateRef<unknown>);
}
