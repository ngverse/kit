import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ChevronDownIcon } from '@ngverse/icons-lu';
import {
  AccordionDirective,
  AccordionHeaderDirective,
  AccordionItemDirective,
  AccordionPanelDirective,
  AccordionTitleDirective,
} from '@ngverse/kit';

@Component({
  selector: 'doc-show-case-accordion',
  imports: [
    AccordionDirective,
    AccordionItemDirective,
    AccordionTitleDirective,
    AccordionPanelDirective,
    AccordionHeaderDirective,
    ChevronDownIcon,
  ],
  templateUrl: './show-case-accordion.component.html',
  styleUrl: './show-case-accordion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCaseAccordionComponent {
  expansions = signal([false, false]);

  accordions = [
    {
      label: 'Section 1',
      body: 'Body 1',
    },
    {
      label: 'Section 2',
      body: 'Body 2',
    },
  ];

  toggle(index: number) {
    this.expansions.update((expansions) => {
      expansions[index] = !expansions[index];
      return expansions;
    });
  }
}
