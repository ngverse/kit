import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DocPageComponent } from '../../core/doc-page/doc-page.component';
import { OverviewSectionComponent } from '../../core/doc-page/overview-section/overview-section.component';
import { ShowCaseComponent } from '../../core/doc-page/show-case/show-case.component';
import { ShowCaseAccordionComponent } from '../../examples/accordion/show-case-accordion/show-case-accordion.component';

@Component({
  selector: 'doc-accordion-page',
  imports: [
    DocPageComponent,
    ShowCaseComponent,
    ShowCaseAccordionComponent,
    OverviewSectionComponent,
  ],
  templateUrl: './accordion-page.component.html',
  styleUrl: './accordion-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionPageComponent {}
