import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[docTabBody]',
})
export class TabBodyDirective {
  templateRef = inject(TemplateRef<unknown>);
}
