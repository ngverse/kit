import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DocPageComponent } from '../../core/doc-page/doc-page.component';
import { ApiSection } from '../../core/doc-page/doc-page.types';
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
export class AccordionPageComponent {
  api: ApiSection = {
    directives: [
      {
        name: 'A11yAccordionGroupDirective',
        selector: '[A1yyAccordion]',
        description: 'the root directive for a11y accordion group',
      },
      {
        name: 'A11yAccordionDirective',
        selector: '[ktA11yAccordion]',
        description: 'the root directive for a11y accordion',
      },
      {
        name: 'A11yAccordionHeaderDirective',
        selector: '[ktA11yAccordionHeader]',
        description:
          'the header of accordion header, it serves as a label for accordion',
        inputs: [
          {
            name: 'a11yAriaLevel',
            type: 'string',
            description:
              'the level of the header, default is 3, the values should be from 1...6',
          },
        ],
      },
      {
        name: 'A11yAccordionTitleDirective',
        selector: 'button[ktA11yAccordionTitle]',
        description:
          'the toggle button of the accordion, it must be inside accordion header',
        inputs: [
          {
            name: 'a11yIsExpanded',
            type: 'boolean',
            description:
              'adds proper aria attribute, when the accordion is expanded',
            required: true,
          },
        ],
      },
      {
        name: 'A11yAccordionPanelDirective',
        selector: '[ktA11yAccordionPanel]',
        description: 'the content of the accordion',
      },
    ],
  };
}
