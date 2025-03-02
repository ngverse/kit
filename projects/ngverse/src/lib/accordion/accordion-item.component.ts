import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  input,
  signal,
} from '@angular/core';
import {
  A11yAccordionDirective,
  A11yAccordionHeaderDirective,
  A11yAccordionPanelDirective,
  A11yAccordionTitleDirective,
} from '@ngverse/kit';
import {
  COLLAPSE_ON_LEAVE,
  EXPAND_ON_ENTER_ANIMATION,
} from './accordion-animations';
import { AccordionComponent } from './accordion.component';
import { ExpandIconComponent } from './expand-icon.component';

let accordionBodyId = 0;

function genAccordionBodyId() {
  return `accordion-item-body-${accordionBodyId++}`;
}

@Component({
  selector: 'app-accordion-item',
  imports: [
    ExpandIconComponent,
    A11yAccordionHeaderDirective,
    A11yAccordionTitleDirective,
    A11yAccordionPanelDirective,
  ],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css',
  animations: [EXPAND_ON_ENTER_ANIMATION, COLLAPSE_ON_LEAVE],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [A11yAccordionDirective],
})
export class AccordionItemComponent {
  disabled = input<boolean>();
  label = input<string>();
  accordion = inject<AccordionComponent>(forwardRef(() => AccordionComponent));
  ariaLevel = input<string>('3');
  accordionBodyId = genAccordionBodyId();

  expanded = input<boolean, boolean>(false, {
    transform: (value) => {
      if (value) {
        this.accordion.open(this);
      } else {
        this.accordion.close(this);
      }
      return value;
    },
  });
  isOpen = signal(false);

  toggle() {
    const isOpen = this.isOpen();
    if (isOpen) {
      this.accordion.close(this);
    } else {
      this.accordion.open(this);
    }
  }
}
